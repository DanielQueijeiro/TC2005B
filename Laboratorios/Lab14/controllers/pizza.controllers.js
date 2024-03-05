const Menu = require('../models/pizza.model')

exports.get_pizzeria = (request, response, next) =>{
    response.render('pizzeria');
};

exports.post_pizza = (request, response, next) =>{
    console.log(request.body);
    const menu = new Menu(request.body.nombre, request.body.imagen);
    menu.save();
    response.setHeader('Set-Cookie', 'ultima_pizza=' + request.body.nombre)
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