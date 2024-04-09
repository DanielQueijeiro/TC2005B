const express = require('express');
const router = express.Router();
const isAuth = require('../util/is-auth');
const canView = require('../util/can-view');
const canCreate = require('../util/can-create');
const pizzeriaController = require('../controllers/pizza.controllers')
  
  
router.get('/menu', isAuth, canView, pizzeriaController.get_menu);
router.post('/crearpizza', isAuth, canCreate, pizzeriaController.post_pizza);
router.get('/crearpizza', isAuth, canCreate, pizzeriaController.get_pizzeria);
router.get('/buscar/:valor_busqueda', isAuth, canView, pizzeriaController.get_buscar);
router.post('/delete', isAuth, canCreate, pizzeriaController.post_delete)
router.get('/menu/:pizza_id', isAuth, canView, pizzeriaController.get_menu)
router.get('/', pizzeriaController.get_main);

module.exports = router;