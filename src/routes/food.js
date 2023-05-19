'use strict';

const express = require('express');
const router = express.Router();
const { food, ingredients } = require('../models/index');


// get food items connected with ingredients table
router.get('/foodWithIngredients', async (req, res, next) => {
  //.model had to be added due to the models interaction with each other so one had to be called
  let foodItems = await food.read(null, { include: { model: ingredients.model } });

  res.status(200).send(foodItems);
});

router.post('/food', async (req, res) => {
  let newFood = await food.create(req.body);

  res.status(200).send(newFood);
});

router.get('/food', async (req, res) => {
  let allFoodItems = await food.read();

  res.status(200).send(allFoodItems);
});

router.get('/food/:id', async (req, res) => {
  let singleFoodItem = await food.read(req.params.id);

  if (singleFoodItem === null) {
    console.log('Food item not found!');
  } else {
    res.status(200).send(singleFoodItem);
  }
});

router.put('/food/:id', async (req, res) => {
  let updatedFoodItem = await food.update(req.body, req.params.id );

  res.status(200).send(updatedFoodItem);
});

router.delete('/food/:id', async (req, res, next) => {
  try {
    await food.delete({ where: {id: req.params.id}});

    res.status(200).send('deleted selected food item');
  } catch (error) {
    next(error);
  }
});

module.exports = router;