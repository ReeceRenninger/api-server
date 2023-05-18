'use strict';

const { Sequelize, DataTypes } = require('sequelize');
const food = require('./food');
const ingredients = require('./ingredients');

// will make dynamic for testing environment
const DATABASE_URL = process.env.DATABASE_URL;

// database singleton, creates the connection
const sequelizeDatabase = new Sequelize(DATABASE_URL);

// create a working and connected FOOD DB model
const foodModel = food(sequelizeDatabase, DataTypes);
const ingredientsModel  = ingredients(sequelizeDatabase, DataTypes);


//exporting our singleton of sequelizeDB and our foodModel
module.exports = {
  sequelizeDatabase,
  foodModel,
  ingredientsModel,
};