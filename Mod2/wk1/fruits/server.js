const express = require('express');
require('dotenv').config()
const fruits = require('./models/fruits.js'); //NOTE: it must start with ./ if it's just a file, not an NPM package
const app = express();
const port = process.env.PORT || 3003;

console.log(process.env.PORT);

// // our data
// // const fruits = ['apple', 'banana', 'pear'];

// const fruits = [
//     {
//         name:'apple',
//         color: 'red',
//         readyToEat: true
//     },
//     {
//         name:'pear',
//         color: 'green',
//         readyToEat: false
//     },
//     {
//         name:'banana',
//         color: 'yellow',
//         readyToEat: true
//     }
// ];

//our route
app.get('/fruits/', (req, res) => {
    res.send(fruits);
});

//show route
app.get('/fruits/:indexOfFruitsArray', (req, res) => {
    res.send(fruits[req.params.indexOfFruitsArray]);
});

//our port
app.listen(3000, () => {
    console.log('listening');
});