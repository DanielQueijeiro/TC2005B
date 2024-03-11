const express = require('express');
const router = express.Router();
const usuariosController = require('../controllers/usuarios.controller')

router.get('/login', usuariosController.get_login);
router.post('/login', usuariosController.post_login);
router.get('/logout', usuariosController.get_logout);
router.get('/signup', usuariosController.get_signup);

module.exports = router;