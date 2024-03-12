const express = require('express');
const router = express.Router();
const isAuth = require('../util/is-auth');
const pizzeriaController = require('../controllers/pizza.controllers')
  
  
router.get('/menu', isAuth, pizzeriaController.get_menu);
router.post('/crearpizza', isAuth, pizzeriaController.post_pizza);
router.get('/crearpizza', isAuth, pizzeriaController.get_pizzeria);
router.get('/menu/:pizza_id', isAuth, pizzeriaController.get_menu)
router.get('/', isAuth, pizzeriaController.get_main);

module.exports = router;