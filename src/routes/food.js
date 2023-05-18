'use strict';

const express = require('express');
const router = express.Router();
const { foodModel } = require('../models/index');


//Create a record //!! WORKING DO NOT TOUCH
router.post('/food', async (req, res) => {
  console.log('this is the req body from post function', req.body);
  let newFood = await foodModel.create(req.body);

  res.status(200).send(newFood);
});

//Get one record //!! WORKING DO NOT TOUCH
router.get('/food/:id', async (req, res) => {
  let singleFoodItem = await foodModel.findByPk( req.params.id);
  
  if (singleFoodItem === null) {
    console.log('Food item not found!');
  } else {
    res.status(200).send(singleFoodItem);
  }
});

//Get all records //!! WORKING DO NOT TOUCH
router.get('/food', async (req, res) => {
  let allFoodItems = await foodModel.findAll();
  
  res.status(200).send(allFoodItems);
});

//!! Ryan helped here for documentation purposes
//Update a record //!! WORKING DO NOT TOUCH
router.put('/food/:id', async (req, res) => {
  await foodModel.update(req.body, {
    where: {
      id: req.params.id,
    },
  });
  let updatedFoodItem = await foodModel.findAll({ where: { id: req.params.id } });
  res.status(200).send(updatedFoodItem);
});

//Delete is working but throwing an error and crashing server //!! WORKING DO NOT TOUCH
router.delete('/food/:id', async (req, res) => {
  let id = parseInt(req.params.id);
  await foodModel.destroy({
    where: {
      id,
    },
  });

  res.status(200).send('food item selected was deleted!'); //!! DO NOT SEND VARIABLE WITH ID, DOES NOT WORK BECAUSE WHEN IT TRIES TO SEND ITS ALREADY GONE 
});

module.exports = router;