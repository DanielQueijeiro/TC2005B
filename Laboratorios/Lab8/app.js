const arreglo = [10,23,45,123,545,343]

function promedio(arreglo){
    let total = 0;
    for(let num of arreglo){
        total = total + num;
    }
    let promedio = total/(arreglo.length);
    console.log(promedio);
}


string = "HOLA MUNDO, ESTA ES MI TAREA DE LAB 8"

function escribirString(string){
    const filesystem = require('fs');

    filesystem.writeFileSync('Lab8.txt', string);
}

function fibonacci(num){
    let a = 1;
    let b = 1;
    for (let i = 3; i <= num; i++) {
        let c = a + b;
        a = b;
        b = c;
    }
    console.log(b);
}

promedio(arreglo)
escribirString(string);
fibonacci(3);


const http = require('http');

const server = http.createServer((request,response) =>{
    console.log(request.url);
    response.setHeader('Content-Type', 'text/html');
    response.write(`
    <!DOCTYPE html>
    <html class="has-background-link-light">
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Laboratorio 6</title>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css">
      </head>
      <body>
        <main>
          <a class="button is-link m-4 is-inline-block" href="../Lab1/index.html">Regresar a Laboratorio 1</a>
          <section class="hero size is-halfheight">
            <div class="container has-text-centered"> 
                <h1 class="title mt-2">Verifica la seguridad de tu constraseña</h1>  
                <h1 class="subtitle mb-4">Recuerda que una contraseña incluye minusculas, mayusculas, numeros y simbolos.</h1> 
                <input class="is-block container is-widescreen px-4" type="text"  id="password" placeholder="Escribe tu contraseña aqui" required/> 
    
                <div class="p-3 mt-2"> 
                    <button class="button is-primary" id="boton" onclick="checkPassword()">Checar nivel de seguridad</button>
                    <audio id="yoda">
                      <source src="img/legoYoda.mp3" type="audio/mp3">
                    </audio>
                    <audio id="yipee">
                      <source src="img/Yipee.mp3" type="audio/mp3">
                    </audio>
                    <h1 class="is-size-4 mt-2" id="quality"></h1>
                </div> 
                <img src="https://media.istockphoto.com/id/134843485/vector/confused-emoticon.jpg?s=612x612&w=0&k=20&c=GnHI36kUMFWfl2FAFzDnGUiVSswjUXtVx46Up2qPwDc=" id="image" width="224" height="48">
            </div> 
          </section>
    
          <section class="container is-widescreen mt-4">
            <h1 class="title">Preguntas Laboratorio 6</h1>
            <article class="message is-dark">
              <div class="message-header">
                <p>¿Por qué es una buena práctica usar JavaScript para checar que sean válidos los inputs de las formas antes de enviar los datos al servidor?</p>
              </div>
              <div class="message-body">
                <ol>
                  <li>Mejora la experiencia del usuario: Al validar los datos en tiempo real, se evitan errores y se proporciona retroalimentación inmediata al usuario, lo que mejora la experiencia de uso.
                  </li>
                  <li>Aumenta la seguridad: La validación de formularios ayuda a prevenir ataques como la inyección de código malicioso o la inserción de datos inválidos.
                  </li>
                  <li>Ahorra tiempo y recursos: Al validar los datos en el lado del cliente, se reduce la carga en el servidor y se evita el procesamiento de datos incorrectos.
                  </li>
                </ol>
              </div>
            </article>
    
            <article class="message is-dark">
              <div class="message-header">
                <p>¿Cómo puedes saltarte la seguridad de validaciones hechas con JavaScript?</p>
              </div>
              <div class="message-body">
                <p>Es posible saltarse la seguridad de validaciones con la consola de JavaScript y modificar la estructura de la página.</p>
              </div>
            </article>
    
            <article class="message is-dark">
              <div class="message-header">
                <p>Si te puedes saltar la seguridad de las validaciones de JavaScript, entonces ¿por qué la primera pregunta dice que es una buena práctica?</p>
              </div>
              <div class="message-body">
                <p>Es considerado una buena práctica debido a que la mayoría de usuarios no intentaran saltarse la seguridad y permite que los datos ingresados sean de valor para la página y no tengan errores o complicaciones.</p>
              </div>
            </article>
    
            <article class="message is-dark">
              <div class="message-header">
                <p>Bibliografía</p>
              </div>
              <div class="message-body">
                <ol>
                  <li>
                    Validación de formularios de datos - Aprende desarrollo web | MDN. (2023, 1 septiembre). MDN Web Docs. https://developer.mozilla.org/es/docs/Learn/Forms/Form_validation
                  </li>
                  <li>
                    Ada. (2020, 12 septiembre). Cómo saltarse la validación HTML5 de un formulario. https://didacticode.com/como-saltarse-validacion-html5-formulario/
                  </li>
                </ol>
              </div>
            </article>
          </section>
    
      </main>
      <script>
      var input = document.getElementById("password");
      input.addEventListener("keypress", function(event) {
          if (event.key === "Enter") {
            event.preventDefault();
            document.getElementById("boton").click();
          }
        });
        
      
      
      function checkPassword(){
          let password = document.getElementById("password").value; 
          let img = document.getElementById("image");
          let points = 0;
              if (password.length >= 6) { 
                  let arrayTest =  
                      [/[0-9]/, /[a-z]/, /[A-Z]/, /[^0-9a-zA-Z]/]; 
                  arrayTest.forEach((item) => { 
                      if (item.test(password)) { 
                          points +=1;
                      }
                  }); 
              }
              
      
              if(points >= 3){
                  var x = document.getElementById("yipee"); 
                  img.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMnSrR7zrsvdBumRHyBWcrGYFhzIcCSB9q5q1IfYcZoA&s"
                  let texto = document.getElementById("quality")
                  texto.innerHTML = "Tu contraseña es segura";
                  x.play();
             
      
              }
                  else {
                      img.src ="https://t4.ftcdn.net/jpg/05/08/38/47/360_F_508384795_AaOb8TQgvq6BqOCbMXtAgEKZJofEXPOn.jpg" 
                      var x = document.getElementById("yoda"); 
                      let texto = document.getElementById("quality")
                      texto.innerHTML = "Tu contraseña es insegura";
                      x.play();
              } 
      }
      </script>
      </body>
      
    </html>
    `);
    response.end();
});

server.listen(3000);

