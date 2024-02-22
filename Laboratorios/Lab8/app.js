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

