function arreglarBuffer(buffer){
    buffer = buffer.replaceAll("%3A",":");
    buffer = buffer.replaceAll("%2F","/");
    buffer = buffer.replaceAll("+", " ");
  return buffer
}

function registrarPizza(string){
  const filesystem = require('fs');

  filesystem.writeFileSync('PizzaCreada.txt', string);
}

const header = `
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
    `;

const footer = `
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
`;

const menu = [{nombre: "Pizza clasica", imagen: "https://images.ctfassets.net/n7hs0hadu6ro/1O0Be1dObiQBm17GQJHLj8/3fde720730f0b3616ecf5a82b928e7f9/pizza-a-domicilio-cerca-de-mi.jpg"}];

const ticket = [{nombre:"", comentarios:"", email:"" }];

//http es un módulo de node con todas las funciones de un servidor web
const http = require('http');

const server = http.createServer( (request, response) => {

    console.log(request.url);

    if (request.url === "/") {

      response.setHeader('Content-Type', 'text/html');
      response.write(header);
      response.write(`
        <section class="hero">
        <div class="hero-body">
          <h1 class="title">Bienvenidos a la Pizzeria!</h1>
          <h1 class="subtitle">En nuestra página podrás crear tus propias pizza para luego ordenarlas y recogerlas en cualquiera de nuestras sucursales :)</h1>
          <img class="" src="https://homebuddy.store/cdn/shop/articles/store_bought_pizza_dough_1024x.jpg?v=1616055784" height="500" width="720">
        </div>
        </section>
    `);
    response.write(footer);
    }

    else if (request.url === "/menu") {

        response.setHeader('Content-Type', 'text/html');
        response.write(header);
        response.write(`
          <h1 class="title">Nuestro menú personalizable!</h1>
          <div class="columns">
      `);

        let tarjetas_pizza = '';
        for(let pizza of menu) {
            tarjetas_pizza += `
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
        </div>
        `;
        }
        response.write(tarjetas_pizza);
        response.write(`</div>`);
        response.write(footer);
        response.end();

    } else if (request.url === "/crearpizza" && request.method === "GET") {

        response.write(header);
        response.write(`
        <h1 class="title">Agregar una pizza</h1>
          <form action="/crearpizza" method="POST">
            <label class="label" for="nombre">Nombre</label>
            <input name="nombre" id="nombre" type="text" class="input"><br>
            <label class="label" for="imagen">Imagen</label>
            <input name="imagen" id="imagen" type="text" class="input"><br><br>
            <input class="button is-success" type="submit" value="Añadir a menú">
          </form>
      `);
        response.write(footer);
        response.end();

    } else if (request.url === "/crearpizza" && request.method === "POST") {

        const datos = [];
        let datosPizza = "";

        request.on('data', (dato) => {
            console.log(dato);
            datos.push(dato);
        });

        return request.on('end', () => {
            let datos_completos = Buffer.concat(datos).toString();
            datos_completos = arreglarBuffer(datos_completos);
            console.log(datos_completos);
            const nombre = datos_completos.split('&')[0].split('=')[1];
            console.log(nombre);
            const imagen = datos_completos.split('&')[1].split('=')[1];
            console.log(imagen);
            menu.push({nombre: nombre, imagen: imagen});
            datosPizza = "Nombre de la pizza: " + nombre + "\n" + "Imagen de la pizza: " + imagen;
            response.write('<script>setTimeout(function () { window.location.href = "/menu"; }, 1000);</script>');
            registrarPizza(datosPizza);
            return response.end();
        });
 
    } else {

        //Código de respuesta para recurso no encontrado
        response.statusCode = 404;

        response.setHeader('Content-Type', 'text/html');
        response.write(header);
        response.write(`
        <h1 class="title">No hay nada aquí....</h1>
        <img src="https://friendlystock.com/wp-content/uploads/2018/04/12-confused-pizza-emoji-cartoon-clipart.jpg" width="720" heigth="500">
        `);
        response.write(footer);

        response.end();
    }

});

server.listen(3000);


