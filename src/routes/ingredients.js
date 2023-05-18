'use strict';

const express = require('express');
const router = express.Router();
const { ingredientsModel } = require('../models/index');

//Create a record //!! WORKING DO NOT TOUCH
router.post('/ingredients', async (req, res, next) => {
  console.log('this is the req body from ingredients post:', req.body);
  let newIngredient = await ingredientsModel.create(req.body);

  res.status(200).send(newIngredient);
});

//Get one record //!! WORKING DO NOT TOUCH
router.get('/ingredients/:id', async (req, res) => {
  let singleIngredient = await ingredientsModel.findAll({ where: { id: req.params.id }});

  if(singleIngredient === null) {
    console.log('Ingredient not found!');
  } else {
    res.status(200).send(singleIngredient);
  }
});

//Get all records //!! WORKING DO NOT TOUCH
router.get('/ingredients', async (req, res, next) => {
  let allIngredients = await ingredientsModel.findAll();

  res.status(200).send(allIngredients);
});


//update a record //!! WORKING DO NOT TOUCH
router.put('/ingredients/:id', async (req, res) => {
  await ingredientsModel.update(req.body, {
    where : {
      id: req.params.id,
    },
  });
  let updatedIngredient = await ingredientsModel.findAll({ where: { id: req.params.id }});
  res.status(200).send(updatedIngredient);
});

//Delete one item //!! WORKING DO NOT TOUCH
router.delete('/ingredients/:id', async (req, res) => {
  let id = parseInt(req.params.id);
  await ingredientsModel.destroy({
    where: {
      id,
    },
  });

  res.status(200).send('ingredient selected was deleted!');
});



module.exports = router;