const menu = [{
    nombre: "Pizza clasica", 
    imagen: "https://images.ctfassets.net/n7hs0hadu6ro/1O0Be1dObiQBm17GQJHLj8/3fde720730f0b3616ecf5a82b928e7f9/pizza-a-domicilio-cerca-de-mi.jpg"
}];

function registrarPizza(string){
    const filesystem = require('fs');
    filesystem.writeFileSync('PizzaCreada.txt', string);
}


exports.get_pizzeria = (request, response, next) =>{
    response.render('pizzeria');
};

exports.post_pizza = (request, response, next) =>{
    console.log(request.body);
    menu.push(request.body);  
    let ticket = "Nombre de la pizza: " + request.body.nombre + "\nImagen de la pizza: " + request.body.imagen; 
    registrarPizza(ticket);
    response.redirect('/menu');
  };

  exports.get_menu = (request, response, next) => {
    response.render('menu', {
        menu: menu
    });
  };