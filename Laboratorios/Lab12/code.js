const express = require('express');
const app = express();

const path = require('path')

app.use(express.static(path.join(__dirname, 'public')));

const misRutas = require('./routes/pizzeria.routes');

app.use('/', misRutas)

const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: false}));

app.use((request, response, next) =>{
  response.status(404);
  response.sendFile(path.join(__dirname, 'views', '404.html'));
});


app.listen(3000);
