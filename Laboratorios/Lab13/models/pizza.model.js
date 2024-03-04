const menu = [{
    nombre: "Pizza clasica", 
    imagen: "https://images.ctfassets.net/n7hs0hadu6ro/1O0Be1dObiQBm17GQJHLj8/3fde720730f0b3616ecf5a82b928e7f9/pizza-a-domicilio-cerca-de-mi.jpg"
}];

function registrarPizza(string){
    const filesystem = require('fs');
    filesystem.writeFileSync('PizzaCreada.txt', string);
}

module.exports = class Menu {

    constructor(mi_nombre, mi_imagen){
        this.nombre = mi_imagen;
        this.imagen = mi_imagen;
    }

    save() {
        menu.push({
            nombre: this.nombre,
            imagen: this.imagen,
        });
    }
    
    static fetchAll() {
        return menu;
    }
}

