function labCuatro(){
    document.write('<link rel="stylesheet" href="style.css">')
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
    } else{document.write(`<p>Respuesta incorrecta, era: ${numeroUno + numeroDos}</p>`)}
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
    clase: [],
    dias: [],
    horas: [],
    addClase: function addClase(clase){this.clase.push(clase)},
    addDias: function addDias(dia){this.dias.push(dia)},
    addHora: function addHora(hora){this.horas.push(hora)},
    getClase: function getClase(num){return this.clase[num]},
    getDias: function getDias(num){return this.dias[num]},
    getHoras: function getHoras(num){return this.horas[num]}
}

const ofertaEducativa = [["Software", "Calculo", "Historia", "Ciencias de la salud", "Economía", "Gastronomía"],["Lunes", "Martes","Miercoles", "Jueves", "Viernes", "Sabado"],["7:00 - 9:00", "9:00 - 11:00", "11:00 - 13:00", "13:00 - 15:00", "15:00 - 17:00", "17:00 - 19:00"]]

var listaMateriasUsadas = [];

function getRandomInt() {
    return Math.floor(Math.random() * 4);
  }

function checarClase(clase){
    if(listaMateriasUsadas.length != 5){
        if(!listaMateriasUsadas.includes(clase)){
            listaMateriasUsadas.push(clase)
            return clase
        }
        else { 
            clase = ofertaEducativa[0][getRandomInt()];
            checarClase(clase);
        }
    }
}

function crearHorario(ofertaEducativa){
    const calendarioITC = Object.create(Calendario);
    let totalClases = parseInt(prompt("Cuantos creditos inscribiste este semestre? (Max:16)"));
    totalClases = Math.floor(totalClases/4);
    document.write("<h1>Calendario ITC</h1>");
    document.write("<table>");
    document.write("<tr><th>Clase</th><th>Dias</th><th>Horario</th></tr>");
    for(let i = 0; i < totalClases; i++){
        calendarioITC.addClase(checarClase(ofertaEducativa[0][getRandomInt()])); 
        calendarioITC.addDias(ofertaEducativa[1][getRandomInt()]);
        calendarioITC.addHora(ofertaEducativa[2][getRandomInt()]);
        document.write(`<tr><td>${calendarioITC.getClase(i)}</td><td>${calendarioITC.getDias(i)}</td><td>${calendarioITC.getHoras(i)}</td></tr>`);
    }
    document.write("</table>")
}
