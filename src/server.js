'use strict';

//IMPORTS
const express = require('express');
const cors = require('cors');
//TODO: get this route working
const foodRouter = require('./routes/food');
const PORT = process.env.PORT || 3002;

//express singleton & needed uses of dependencies
const app = express();
app.use(cors());
app.use(express.json());
app.use(foodRouter);

//proof of life endpoint
app.get('/', (req, res, next) => {
  res.status(200).send('I AM ALIVE!');
});


app.get('/ingredients', (req, res, next) => {
  res.status(200).send('ingredients route is alive!');
});


const start = (port) => app.listen(port, () => console.log('server running on', port));

module.exports = {
  app,
  start,
};