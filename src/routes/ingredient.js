'use strict';

const express = require('express');
const router = express.Router();
const { ingredients } = require('../models/index');

//Create a record //!! WORKING DO NOT TOUCH
router.post('/ingredients', async (req, res, next) => {
  let newIngredient = await ingredients.create(req.body);

  res.status(200).send(newIngredient);
});

//Get one record //!! WORKING DO NOT TOUCH
router.get('/ingredients/:id', async (req, res) => {
  let singleIngredient = await ingredients.read(req.params.id);

  if(singleIngredient === null) {
    console.log('Ingredient not found!');
  } else {
    res.status(200).send(singleIngredient);
  }
});

//Get all records //!! WORKING DO NOT TOUCH
router.get('/ingredients', async (req, res) => {
  let allIngredients = await ingredients.read();

  res.status(200).send(allIngredients);
});


//update a record //!! WORKING DO NOT TOUCH
router.put('/ingredients/:id', async (req, res) => {
  await ingredients.update(req.body, {
    where : {
      id: req.params.id,
    },
  });
  let updatedIngredient = await ingredients.findAll({ where: { id: req.params.id }});
  res.status(200).send(updatedIngredient);
});

//Delete one item //!! WORKING DO NOT TOUCH
router.delete('/ingredients/:id', async (req, res, next) => {
  try {
    let id = parseInt(req.params.id);
    await ingredients.destroy({
      where: {
        id,
      },
    });
  
    res.status(200).send('ingredient selected was deleted!');
    
  } catch (error) {
    next(error);
  }
});


module.exports = router;