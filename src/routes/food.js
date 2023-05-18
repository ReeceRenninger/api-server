'use strict';

const express = require('express');
const router = express.Router();
const { food, ingredients } = require('../models/index');



//Create a record //!! WORKING DO NOT TOUCH
router.post('/food', async (req, res) => {
  console.log('this is the req body from post function', req.body);
  let newFood = await food.create(req.body);

  res.status(200).send(newFood);
});

//Get all records //!! WORKING DO NOT TOUCH
router.get('/food', async (req, res) => {
  let allFoodItems = await food.read();
  
  res.status(200).send(allFoodItems);
});

//get food items connected with ingredients table
router.get('/foodWithIngredients', async (req, res, next) => {
  let foodItems = await food.findAll({include: {model: ingredientsModel}});
  
  res.status(200).send(foodItems);
});

//get single food items connected with ingredients table
router.get('/foodWithSingleIngredients', async (req, res, next) => {
  let foodItems = await food.findAll({
    include: {model: ingredientsModel}, 
    where: {id: req.params.id},
  });
  
  res.status(200).send(foodItems);
});

//Get one record //!! WORKING DO NOT TOUCH
router.get('/food/:id', async (req, res) => {
  let singleFoodItem = await food.read( req.params.id);
  
  if (singleFoodItem === null) {
    console.log('Food item not found!');
  } else {
    res.status(200).send(singleFoodItem);
  }
});


//!! Ryan helped here for documentation purposes
//Update a record //!! WORKING DO NOT TOUCH
router.put('/food/:id', async (req, res) => {
  await food.update(req.body, {
    where: {
      id: req.params.id,
    },
  });
  let updatedFoodItem = await food.findAll({ where: { id: req.params.id } });
  res.status(200).send(updatedFoodItem);
});

//Delete is working but throwing an error and crashing server //!! WORKING DO NOT TOUCH
router.delete('/food/:id', async (req, res, next) => {
  try {
    let id = parseInt(req.params.id);
    await food.destroy({
      where: {
        id,
      },
    });
  
    res.status(200).send('food item selected was deleted!'); //!! DO NOT SEND VARIABLE WITH ID, DOES NOT WORK BECAUSE WHEN IT TRIES TO SEND ITS ALREADY GONE 
    
  } catch (error) {
    next(error);
  }
});

module.exports = router;