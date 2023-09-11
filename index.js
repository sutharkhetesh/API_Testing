const express = require('express');
const app = express()



const car = [
    {
        id: 1,
        name: 'BMW i7',
        brand: 'BMW',
        price: 1000000,
        fuelType: 'Petrol',
        transmition: 'Automatic',
        Image: 'https://www.bmw.in/content/dam/bmw/common/all-models/7-series/sedan/2019/inspire/bmw-7-series-inspire-edition-sedan-3x2.png/_jcr_content/renditions/cq5dam.resized.img.585.low.time1562003786000.png'
    },
    {
        id: 2,
        name: 'BMW i8',
        brand: 'BMW',
        price: 2000000,
        fuelType: 'Petrol',
        transmition: 'Automatic',
        Image: 'https://www.bmw.in/content/dam/bmw/common/all-models/i-series/i8/2017/model-card/BMW-i8-ModelCard.png/_jcr_content/renditions/cq5dam.resized.img.585.low.time1490016039201.png'
    },
    {
        id: 3,
        name: 'BMW X7',
        brand: 'BMW',
        price: 3000000,
        fuelType: 'Petrol',
        transmition: 'Automatic',
        Image: 'https://www.bmw.in/content/dam/bmw/common/all-models/x-series/x7/2018/model-card/BMW-X7-ModelCard.png/_jcr_content/renditions/cq5dam.resized.img.585.low.time1541166036000.png'
    }

]

app.use(express.json())

app.get('/', function (req, res) {
    res.send('Hello World')
})
//Get All todos
app.get('/car', function (req, res) {
    res.send(car)
})


// Get one by id
app.get('/car/:Id', function (req, res) {
    const show = car.find(t => t.id.toString() === req.params.Id)
    if (show) {
        res.send(show)
    } else {
        res.status(404).send('Not Found')
    }
})

// Create one 
app.post('/car', function (req, res) {
    car.push(req.body)
    res.status(201).send('The request is complete')
})


//Delete one todo by id
app.delete('/car/:Id', function (req, res) {
    const foundIndex = car.findIndex(t => t.id.toString() === req.params.Id)
    if (foundIndex > -1) {
        car.splice(foundIndex, 1)
        res.send('Deleted')
    } else {
        res.status(404).send('Not found')
    }
})

// udpate one todo by id
app.patch('/car/:Id', function (req, res) {
    const data = req.body;
    const foundIndex = car.findIndex(t => t.id.toString() === req.params.Id)
    if (foundIndex > -1) {
        const old = car[foundIndex]
        car[foundIndex] = {
            ...old,
            ...data
        }
        res.send('Updated')
    } else {
        res.status(404).send('Not found')
    }
})

app.listen(3000)