function labCuatro(){
    tabla()
    random()
    contador(arreglo)
}

function tabla(){
    let numero = parseInt(prompt("Pregunta 1: Ingresa un número:"));

    if (!isNaN(numero)) {
    document.write("<h1>Problema 1</h1>")
    document.write("<table>");
    document.write("<tr><th>Número</th><th>Cuadrado</th><th>Cubo</th></tr>");
    for (let i = 1; i <= numero; i++) {
        const cuadrado = i * i;
        const cubo = i * i * i;
        document.write(`<tr><td>${i}</td><td>${cuadrado}</td><td>${cubo}</td></tr>`);
    }
    document.write("</table>");
    } else {
    document.write("Por favor, ingresa un número válido.");
    }
}

function random(){
    let numeroUno = parseInt(Math.floor(Math.random() * 10));
    let numeroDos = parseInt(Math.floor(Math.random() * 10));
    let respuesta = parseInt(prompt(`Pregunta 2: Cuál es el resultado de: ${numeroUno} + ${numeroDos}`));
    document.write("<h1>Problema 2</h1>");
    if(respuesta == numeroUno + numeroDos){
       document.write("<p>Respuesta correcta</p>") 
    } else{document.write("<p>Respuesta incorrecta</p>")}

}

const arreglo = [-1, -2, 0 , 4, 5]
function contador(arreglo){
    document.write("<h1>Problema 3</h1>");
    var totalNegativo = 0;
    var totalCero = 0;
    var totalPositivo = 0;
    for(const num  in arreglo){
        if(arreglo[num] < 0){
            totalNegativo++ 
        }
        if(arreglo[num] == 0){
            totalCero++
        }
        if(arreglo[num] > 0){
            totalPositivo++
        }
    }
    document.write(`<p>El arreglo es: [${arreglo}]</p><p>El total números negativos son: ${totalNegativo}</p> <p>El total de ceros en el arreglo es: ${totalCero}</p><p> El total de números positivos: ${totalPositivo}</p>`);
}

const matriz = [[1,2,3],[4,5,6],[7,8,9]];
function promedios(matriz){
    let respuesta = [];
    respuesta.push();
}

function cambiarImg(){
    var img = document.getElementById("fotoKat");
    img.src="img/kat2.png";
}