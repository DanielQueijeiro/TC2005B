const express = require('express');
const router = express.Router();
const pizzeriaController = require('../controllers/pizza.controllers')
  
  
router.get('/menu', pizzeriaController.get_menu);
router.post('/crearpizza',  pizzeriaController.post_pizza);
router.get('/crearpizza', pizzeriaController.get_pizzeria);
router.get('/menu/:pizza_id', pizzeriaController.get_menu)
router.get('/', pizzeriaController.get_main);

module.exports = router;