'use strict';

const express = require('express');
const router = express.Router();
const { foodModel } = require('../models/food');

router.get('/food', async (req, res, next) => {
  res.status(200).send('food route is alive!');
  let singleFoodItem = await foodModel.findAll({where: {id: req.params.id}});

  res.status(200).send(singleFoodItem);
});
router.post('/food', async (req, res, next) => {
  let newFood = await foodModel.create(req.body);

  res.status(200).send(newFood);
});