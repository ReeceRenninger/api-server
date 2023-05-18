'use strict';

//IMPORTS
const express = require('express');
const cors = require('cors');
const notFound = require('./error-handlers/404');
const errorHandler = require('./error-handlers/500');
//TODO: get this route working
// ** Routers **/
const foodRouter = require('./routes/food');
const ingredientRouter = require('./routes/ingredient');


//express singleton & needed uses of dependencies
const app = express();
app.use(cors());
app.use(express.json());
app.use(foodRouter);
app.use(ingredientRouter);

//proof of life endpoint
app.get('/', (req, res, next) => {
  res.status(200).send('I AM ALIVE!');
});


//!! These must be last on server 
app.use('*', notFound); // 404 error handler
app.use(errorHandler); // catch all 500 error handler

const start = (port) => app.listen(port, () => console.log('server running on', port));

module.exports = {
  app,
  start,
};