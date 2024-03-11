const filesystem = require('fs');

const db = require('../util/database');

module.exports = class Menu {

    constructor(mi_nombre, mi_imagen){
        this.nombre = mi_nombre;
        this.imagen = mi_imagen;
    }

    save() {
        let ticket = "Nombre de la pizza: " + this.nombre + "\nImagen de la pizza: " + this.imagen; 
        filesystem.writeFileSync('PizzaCreada.txt', ticket);
        return db.execute('INSERT INTO pizza (nombre, imagen, username) VALUES (?, ?, "DanielQ")',
        [this.nombre, this.imagen]
    );
    }
    
    static fetchAll() {
       return db.execute('SELECT * FROM pizza');
    }

    static fetchOne(id) {
        return db.execute('SELECT * FROM pizza WHERE id=?', [id]);
     }
    
    static fetch(id){
        if(id){
            return this.fetchOne(id);
        } else {
            return this.fetchAll();
        }
    }
}

