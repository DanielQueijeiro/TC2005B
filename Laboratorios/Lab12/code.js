const express = require('express');
const app = express();

const misRutas = require('./routes/pizzeria.routes');

app.use('/', misRutas)

const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: false}));

app.use((request, response, next) =>{
  response.status(404);
  response.send(`
  <!DOCTYPE html>
    <html lang="es">
        <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1">
            <title>Pizzas</title>
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css">
        </head>
        <body class="has-background-link-light">
            <nav class="navbar" role="navigation" aria-label="main navigation">
                <div class="navbar-brand">
                  <a class="navbar-item" href="/">
                    <img src="https://e7.pngegg.com/pngimages/736/179/png-clipart-pizza-pizza-logo-pizza-icon-white-food.png" width="50" height="50">
                  </a>
              
                  <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                  </a>
                </div>
              
                <div id="navbarBasicExample" class="navbar-menu">
                  <div class="navbar-start">
                    <a class="navbar-item" href="/menu">
                      Menú personalizado
                    </a>
              
                    <a class="navbar-item" href="/crearpizza">
                      Crea tu propia pizza!
                    </a>

                    <a class="navbar-item" href="/contactanos">
                      Contactanos
                    </a>

                    <a class="navbar-item" href="/rutafalsa">
                      Error 404 :)
                    </a>

                  </div>
                </div>
              </nav>
            <section class="section">
                <div class="container">
  <h1 class="title">No hay nada aquí....</h1>
  <img src="https://friendlystock.com/wp-content/uploads/2018/04/12-confused-pizza-emoji-cartoon-clipart.jpg" width="720" heigth="500">
  </div>
  </section>
  <footer class="footer">
    <div class="content has-text-centered">
      <p>
        <strong>Lab 9.</strong> - Daniel Queijeiro
      </p>
    </div>
  </footer>
</body>
</html>
  `);
});


app.listen(3000);
