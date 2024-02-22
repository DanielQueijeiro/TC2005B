console.log("hola")

const filesystem = require('fs');

filesystem.writeFileSync('hola.txt', 'Hola desde node');

// const http = require('http');

// const server = http.createServer((request,response) =>{
//     console.log(request.url);
//     response.setHeader('Content-Type', 'text/html');
//     response.write("<h1>Hola mundo</h1>");
//     response.end();
// });

// server.listen(3000);

arreglo = [10,23,45,123,545,343]

function promedio(arreglo){
    let total = 0;
    for(let num of arreglo){
        total = total + num;
    }
    let promedio = total/(arreglo.length);
    console.log(promedio);
}

promedio(arreglo)