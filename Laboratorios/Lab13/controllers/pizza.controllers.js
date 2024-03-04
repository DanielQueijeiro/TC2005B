const Menu = require('../models/pizza.model')

function registrarPizza(string){
    const filesystem = require('fs');
    filesystem.writeFileSync('PizzaCreada.txt', string);
}


exports.get_pizzeria = (request, response, next) =>{
    response.render('pizzeria');
};

exports.post_pizza = (request, response, next) =>{
    console.log(request.body);
    const menu = new Menu(request.body.nombre, request.body.imagen);
    menu.save();
    let ticket = "Nombre de la pizza: " + request.body.nombre + "\nImagen de la pizza: " + request.body.imagen; 
    registrarPizza(ticket);
    response.redirect('/menu');
  };

exports.get_menu = (request, response, next) => {
    response.render('menu', {
        menu: Menu.fetchAll()
    });
};

exports.get_main = (request, response, next) => {
    response.render('main'); 
};