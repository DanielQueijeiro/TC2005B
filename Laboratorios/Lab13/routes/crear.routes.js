function registrarPizza(string){
    const filesystem = require('fs');
  
    filesystem.writeFileSync('PizzaCreada.txt', string);
  }

  const express = require('express');

  const router = express.Router();
  const pizzeriaController = require('../controllers/pizza.controllers')
  
  const menu = [{
    nombre: "Pizza clasica", 
    imagen: "https://images.ctfassets.net/n7hs0hadu6ro/1O0Be1dObiQBm17GQJHLj8/3fde720730f0b3616ecf5a82b928e7f9/pizza-a-domicilio-cerca-de-mi.jpg"}];
  
  
  router.get('/menu', (request, response, next) => {
    response.render('menu', {
        menu: menu
    });
  });

  router.post('/crearpizza', (request, response, next) =>{
    console.log(request.body);
    menu.push(request.body);  
    let ticket = "Nombre de la pizza: " + request.body.nombre + "\nImagen de la pizza: " + request.body.imagen; 
    registrarPizza(ticket);
    response.redirect('/menu');
  });
  
  router.get('/crearpizza', pizzeriaController.get_pizzeria);

  module.exports = router;