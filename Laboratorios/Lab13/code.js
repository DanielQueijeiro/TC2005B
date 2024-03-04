const express = require('express');
const app = express();

const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: false}));

app.set('view engine', 'ejs');
app.set('views', 'views');

const path = require('path')

app.use(express.static(path.join(__dirname, 'public')));

const rutaCrear = require('./routes/crear.routes');
app.use('/', rutaCrear)

const rutaPizzeria = require('./routes/pizzeria.routes');
app.use('/', rutaPizzeria)

app.use((request, response, next) =>{
  response.status(404);
  response.sendFile(path.join(__dirname, 'views', '404.html'));
});


app.listen(3000);