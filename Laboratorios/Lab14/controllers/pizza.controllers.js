const Menu = require('../models/pizza.model')

exports.get_pizzeria = (request, response, next) =>{
    response.render('pizzeria');
};

exports.post_pizza = (request, response, next) =>{
    console.log(request.body);
    const menu = new Menu(request.body.nombre, request.body.imagen);
    menu.save();
    response.setHeader('Set-Cookie', 'ultima_pizza=' + request.body.nombre + '; HttpOnly')
    response.redirect('/menu');
  };

exports.get_menu = (request, response, next) => {
    let ultima_pizza = request.get('Cookie')
    if(ultima_pizza){
        ultima_pizza = ultima_pizza.split('=')[1];
    } else { 
        ultima_pizza = ''
    }
    response.render('menu', {
        menu: Menu.fetchAll(),
        ultima_pizza: ultima_pizza,
    });
};

exports.get_main = (request, response, next) => {
    response.render('main'); 
};