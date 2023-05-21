'use strict';

require('dotenv').config();

const { sequelizeDatabase } = require('./src/models/index');
const { start } = require('./src/server');

const PORT = process.env.PORT;

sequelizeDatabase.sync()
  .then(() => {
    console.log('Connection is working!');
    //start our server here
    start(PORT);
  })
  .catch(e => console.error(e));