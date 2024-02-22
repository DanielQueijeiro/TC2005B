console.log("hola")


// const http = require('http');

// const server = http.createServer((request,response) =>{
//     console.log(request.url);
//     response.setHeader('Content-Type', 'text/html');
//     response.write("<h1>Hola mundo</h1>");
//     response.end();
// });

// server.listen(3000);

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


promedio(arreglo)
escribirString(string);