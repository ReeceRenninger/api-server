'use strict';

const express = require('express');
const router = express.Router();
const { ingredients } = require('../models/index');

router.post('/ingredients', async (req, res, next) => {
  let newIngredient = await ingredients.create(req.body);

  res.status(200).send(newIngredient);
});

router.get('/ingredients', async (req, res) => {
  let allIngredients = await ingredients.read();

  res.status(200).send(allIngredients);
});

router.get('/ingredients/:id', async (req, res) => {
  let singleIngredient = await ingredients.read(req.params.id);

  if(singleIngredient === null) {
    console.log('Ingredient not found!');
  } else {
    res.status(200).send(singleIngredient);
  }
});

router.put('/ingredients/:id', async (req, res) => {
  let updatedIngredient = await ingredients.update(req.body, req.params.id);

  res.status(200).send(updatedIngredient);
});

router.delete('/ingredients/:id', async (req, res, next) => {
  try {
    await ingredients.destroy({where: {id: req.params.id}});
  
    res.status(200).send('ingredient selected was deleted!');
  } catch (error) {
    next(error);
  }
});

module.exports = router;