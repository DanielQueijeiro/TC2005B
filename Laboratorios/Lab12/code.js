function registrarPizza(string){
  const filesystem = require('fs');

  filesystem.writeFileSync('PizzaCreada.txt', string);
}


const express = require('express');
const app = express();

const bodyParser = require('body-parser');

const menu = [{nombre: "Pizza clasica", imagen: "https://images.ctfassets.net/n7hs0hadu6ro/1O0Be1dObiQBm17GQJHLj8/3fde720730f0b3616ecf5a82b928e7f9/pizza-a-domicilio-cerca-de-mi.jpg"}];

app.use(bodyParser.urlencoded({extended: false}));



app.get('/menu', (request, response, next) =>{
  let html_respuesta=`
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
              <h1 class="title">Nuestro menú personalizable!</h1>
              <div class="columns">
  `;
  for (let pizza of menu) {
    
    html_respuesta += `
    <div class="column">
    <div class="card">
      <div class="card-image">
        <figure class="image is-4by3">
          <img src="${pizza.imagen}" alt="Placeholder image">
        </figure>
      </div>
      <div class="card-content">
        <div class="media">
          <div class="media-left">
            <figure class="image is-48x48">
              <img src="${pizza.imagen}" alt="Placeholder image">
            </figure>
          </div>
          <div class="media-content">
            <p class="title is-4">${pizza.nombre}</p>
          </div>
        </div>
    
        <div class="content">
          <p>Buena pizza :)</p>
        </div>
        </div>
        </div>
      </div>`
  }

  html_respuesta += `
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
  `
  response.send(html_respuesta);
});

app.post('/crearpizza', (request, response, next) =>{
  console.log(request.body);
  menu.push(request.body);  
  let ticket = "";
  ticket += request.body.nombre + "\n" + request.body.imagen; 
  registrarPizza(ticket);
  response.redirect('/menu');
});

app.get('/crearpizza',(request, response, next) =>{
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
              <h1 class="title">Agregar una pizza</h1>
              <form action="/crearpizza" method="POST">
                <label class="label" for="nombre">Nombre</label>
                <input name="nombre" id="nombre" type="text" class="input"><br>
                <label class="label" for="imagen">Imagen</label>
                <input name="imagen" id="imagen" type="text" class="input"><br><br>
                <input class="button is-success" type="submit" value="Añadir a menú">
              </form>
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
  `)
});

app.get('/', (request, response, next) => {
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
      <main>
      <section class="hero">
      <div class="hero-body">
        <h1 class="title">Bienvenidos a la Pizzeria!</h1>
        <h1 class="subtitle">En nuestra página podrás crear tus propias pizza para luego ordenarlas y recogerlas en cualquiera de nuestras sucursales :)</h1>
        <img class="" src="https://homebuddy.store/cdn/shop/articles/store_bought_pizza_dough_1024x.jpg?v=1616055784" height="500" width="720">
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
