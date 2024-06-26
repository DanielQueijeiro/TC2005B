const Menu = require('../models/pizza.model')

exports.get_pizzeria = (request, response, next) =>{
    response.render('pizzeria',{
        username: request.session.username || '',
        csrfToken: request.csrfToken(),
        permisos: request.session.permisos || [],
    });
};

exports.post_pizza = (request, response, next) =>{
    const menu = new Menu(request.body.nombre, request.file.filename, request.body.username);
    menu.save()
        .then(([rows, fieldData]) => {
            response.setHeader('Set-Cookie', 'ultima_pizza=' + request.body.nombre + '; HttpOnly')
            response.redirect('/crear/menu');})
        .catch((error) => {console.log(error)});
  };

exports.get_menu = (request, response, next) => {
    let ultima_pizza = request.get('Cookie')
    if(ultima_pizza){
        ultima_pizza = ultima_pizza.split('=')[1];
    } else { 
        ultima_pizza = ''
    }

    Menu.fetch(request.params.pizza_id).then(([rows, fieldData]) => {
        response.render('menu', {
        menu: rows,
        ultima_pizza: ultima_pizza,
        username: request.session.username || '',
        permisos: request.session.permisos || [],
        csrfToken: request.csrfToken(),
        })
    })
        .catch(error => {
        console.log(error);
    });
};

exports.get_main = (request, response, next) => {
    response.render('main',{
        username: request.session.username || '',
        permisos: request.session.permisos || [],
    }); 
};

exports.get_buscar = (request, response, next) => {
    Menu.search(request.params.valor_busqueda)
    .then(([pizzas, fieldData]) => {
        return response.status(200).json({pizzas: pizzas});
    })
    .catch((error) => {console.log(error)})
}

exports.post_delete = (request, response, next) => {
    Menu.delete(request.body.id)
        .then(() => {
            return Menu.fetch();
        })
        .then(([pizzas, fieldData]) => {
            return response.status(200).json({pizzas: pizzas})
        })
        .catch((error) => {console.log(error)});
};