const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const db = require('./util/database');

app.use(bodyParser.urlencoded({extended: false}));

app.set('view engine', 'ejs');
app.set('views', 'views');

const session = require('express-session');

app.use(session({
  secret: 'mi string secreto que debe ser un string aleatorio muy largo, no como éste', 
  resave: false, //La sesión no se guardará en cada petición, sino sólo se guardará si algo cambió 
  saveUninitialized: false, //Asegura que no se guarde una sesión para una petición que no lo necesita
}));

const path = require('path')

app.use(express.static(path.join(__dirname, 'public')));

const rutasUsuarios = require('./routes/usuarios.routes')
app.use('/users', rutasUsuarios)

const rutaCrear = require('./routes/crear.routes');
app.use('/crear', rutaCrear)

app.use((request, response, next) =>{
  response.status(404);
  response.sendFile(path.join(__dirname, 'views', '404.html'));
});


app.listen(3000);