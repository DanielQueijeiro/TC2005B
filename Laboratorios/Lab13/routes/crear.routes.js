

  const express = require('express');

  const router = express.Router();
  const pizzeriaController = require('../controllers/pizza.controllers')
  
const menu = [{
  nombre: "Pizza clasica", 
  imagen: "https://images.ctfassets.net/n7hs0hadu6ro/1O0Be1dObiQBm17GQJHLj8/3fde720730f0b3616ecf5a82b928e7f9/pizza-a-domicilio-cerca-de-mi.jpg"}];
  
  
  router.get('/menu', pizzeriaController.get_menu);
  router.post('/crearpizza',  pizzeriaController.post_pizza);
  router.get('/crearpizza', pizzeriaController.get_pizzeria);

  module.exports = router;