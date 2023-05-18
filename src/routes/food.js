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
  let singleFoodItem = await foodModel.findAll({ where: {id: req.params.id }}); // find entry by primary key provided

  if (singleFoodItem === null) {
    console.log('Food item not found!');
  } else {
    res.status(200).send(singleFoodItem);
  }
});

//Get all records //!! WORKING DO NOT TOUCH
router.get('/food', async (req, res) => {
  let allFoodItems = await foodModel.findAll();
  console.log(allFoodItems);
  res.status(200).send(allFoodItems);
});

//Update a record
// router.put()

//Delete is working but throwing an error and crashing server
router.delete('/food/:id', async (req, res) => {
  let id = parseInt(req.params.id);
  let deleteOneFoodItem = await foodModel.destroy({
    where: {
      id,
    },
  });

  res.status(200).send(deleteOneFoodItem);
});

module.exports = router;