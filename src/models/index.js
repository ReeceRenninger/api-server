'use strict';

const { Sequelize, DataTypes } = require('sequelize');
const food = require('./food');
const ingredients = require('./ingredients');
const Collection = require('./collection');

// will make dynamic for testing environment
// double colon may be a bug, may need to delete if issues persist
const DATABASE_URL = process.env.NODE_ENV === 'test' ? 'sqlite:memory:': process.env.DATABASE_URL;

// database singleton, creates the connection
const sequelizeDatabase = new Sequelize(DATABASE_URL);

// create a working and connected FOOD DB model
const foodModel = food(sequelizeDatabase, DataTypes);
const ingredientsModel  = ingredients(sequelizeDatabase, DataTypes);

//associations
foodModel.hasMany(ingredientsModel);
ingredientsModel.belongsTo(foodModel);


//exporting our singleton of sequelizeDB and our foodModel
module.exports = {
  sequelizeDatabase,
  food: new Collection(foodModel),
  ingredients: new Collection(ingredientsModel),
};