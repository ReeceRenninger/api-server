'use strict';

const express = require('express')
const router = express.Router();
const { ingredientsModel } = require('../models/ingredients');


router.post('/ingredients', async (req, res, next) => {
  console.log('this is the req body from ingredients post:', req.body);
  let newIngredient = await ingredientsModel.create(req.body);

  res.status(200).send(newIngredient);
});


router.get('/ingredients', (req, res, next) => {

  res.status(200).send('ingredients route is alive!');
});




module.exports = router;