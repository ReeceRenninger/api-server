'use strict';

const express = require('express');
const router = express.Router();
const { food, ingredients } = require('../models/index');


//get food items connected with ingredients table
router.get('/foodWithIngredients', async (req, res, next) => {
  let foodItems = await food.findAll({ include: { model: ingredients } });

  res.status(200).send(foodItems);
});

//get single food items connected with ingredients table
router.get('/foodWithSingleIngredients', async (req, res, next) => {
  let foodItems = await food.findAll({
    include: { model: ingredients },
    where: { id: req.params.id },
  });

  res.status(200).send(foodItems);
});

//Create a record //!! WORKING DO NOT TOUCH
router.post('/food', async (req, res) => {
  let newFood = await food.create(req.body);

  res.status(200).send(newFood);
});

//Get all records //!! WORKING DO NOT TOUCH
router.get('/food', async (req, res) => {
  let allFoodItems = await food.read();

  res.status(200).send(allFoodItems);
});


//Get one record //!! WORKING DO NOT TOUCH
router.get('/food/:id', async (req, res) => {
  let singleFoodItem = await food.read(req.params.id);

  if (singleFoodItem === null) {
    console.log('Food item not found!');
  } else {
    res.status(200).send(singleFoodItem);
  }
});


//!! Ryan helped here for documentation purposes
//Update a record //!! WORKING DO NOT TOUCH
router.put('/food/:id', async (req, res) => {
  let updatedFoodItem = await food.update(req.body, req.params.id );

  res.status(200).send(updatedFoodItem);
});

//!! WORKING DO NOT TOUCH
router.delete('/food/:id', async (req, res, next) => {
  try {
    await food.delete({ where: {id: req.params.id}});

    res.status(200).send('deleted selected food item');
  } catch (error) {
    next(error);
  }
});

module.exports = router;