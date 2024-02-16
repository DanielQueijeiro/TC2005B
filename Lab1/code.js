function labCuatro(){
    tabla()
    random()
    contador(arreglo)
    promedios(matriz)
    inverso(num)
    crearHorario(ofertaEducativa)
}

function tabla(){
    let numero = parseInt(prompt("Pregunta 1: Ingresa un número:"));
    document.write("<h1>Problema 1</h1>")

    if (!isNaN(numero)) {
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
    let timeInicio = Date.now()
    let numeroUno = Math.floor(Math.random() * 10) +1;
    let numeroDos = Math.floor(Math.random() * 10) +1;
    let respuesta = parseInt(prompt(`Pregunta 2: Cuál es el resultado de: ${numeroUno} + ${numeroDos}`));
    let timeFin = Date.now()
    let timeTotal = timeFin - timeInicio;
    document.write("<h1>Problema 2</h1>");
    if(respuesta == numeroUno + numeroDos){
       document.write(`<p>Respuesta correcta: ${respuesta}</p>`) 
    } else{document.write(`<p>Respuesta incorrecta, era: ${respuesta}</p>`)}
    document.write(`<p>El tiempo tardado en constestar fue de: ${timeTotal * 0.001} segundos.</p>`)

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
    for(const fila of matriz){
        const suma = fila.reduce((acumulador, numero) => acumulador + numero, 0);
        const promedio = suma/fila.length;

        respuesta.push(promedio);
    }
    document.write("<h1>Pregunta 4</h1>");
    document.write(`<p>Los promedios de la matriz son: [${respuesta}]</p>`);
}

let num = 12345;
 
function inverso(num){
    let FuncAuxInverso = num => Number(num);
    let arreglo = Array.from(String(num), FuncAuxInverso);
    arreglo = arreglo.reverse();
    document.write("<h1>Pregunta 5</h1>");
    document.write(`<p> El inverso del arreglo es: [${arreglo}]</p>`);
}

function cambiarImg(){
    const img = document.getElementById("fotoKat");
    const imgSrc1 = "img/kat.jpeg";
    const imgSrc2 = "img/kat2.png";
    if (img.src.includes(imgSrc1)){
        img.src = imgSrc2;
    }
    else{ img.src = imgSrc1;}
}


const Calendario = {
    clase: "",
    dias: "",
    horas: "",
    getClase: function getClase(){return this.clase},
    getDias: function getDias(){return this.dias},
    getHoras: function getHoras(){return this.horas}
}

const ofertaEducativa = [["Software", "Lunes, Martes, Jueves, Viernes", "9:00 - 13:00" ], ["Calculo", "Diario", "10:00 - 12:00"], ["Historia", "Lunes y Viernes", "7:00 - 10:00"], ["Ciencias de la salud", "Martes y Jueves", "8:00 - 11:00"], ["Economía", "Miercoles", "12:00 - 14:00"]]



function crearHorario(ofertaEducativa){
    const calendarioITC = Object.create(Calendario);
    calendarioITC.clase = ofertaEducativa[0][0];
    calendarioITC.dias = ofertaEducativa[1][1];
    calendarioITC.horas = ofertaEducativa[1][2];
    document.write("<h1>Calendario ITC</h1>");
    document.write("<table>");
    document.write("<tr><th>Clase</th><th>Dias</th><th>Horario</th></tr>");
    document.write(`<tr><td>${calendarioITC.getClase()}</td><td>${calendarioITC.getDias()}</td><td>${calendarioITC.getHoras()}</td></tr>`);
    document.write("</table>");
}
