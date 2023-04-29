'use strict'

var pais = "Colombia";
var continente = "America";
var antiguedad = 2019;
var pais_y_continente = pais + " " + continente;
let prueba = "hola"; //En bloque

var hola = "hola";

if(true){
    let hola = "carro";  //Se mantiene solo en el bloque if
}

pais = "España";
continente = "Europa";

console.log(pais, continente, antiguedad);
console.log(pais_y_continente);

var result = confirm("Quieres continuar?");
console.log(result);

var my_result = prompt("Que edad tienes?", 18);
console.log (typeof my_resultado);

isNaN(antiguedad); // validar si es un no número

var num1 = parseInt(prompt("Ingrese el número 1", 0));
var num2 = parseInt(prompt("Ingrese el número 2", 0));

function calculadora(num1, num2, mostrar = false){

    if(mostrar == false){
        console.log("suma: "+(num1+num2));
        console.log("resta: "+(num1-num2));
    }
    else{
        document.write("<h2>"+"suma: "+(num1+num2)+"</h2>"+"<br>");
        document.write("<h2>"+"resta: "+(num1-num2)+"</h2>"+"<br>");
    }
    return true;
}

calculadora(num1, num2);

calculadora(num1, num2, true);

// REST y SPREAD transforma arrays

//REST
function listadoFrutas(fruta1, fruta2, ...resto_de_frutas){
    console.log("Fruta 1:", fruta1);
    console.log("Fruta 2:", fruta2);
    console.log(resto_de_fruta);
}

listadoFrutas("Naranja","Manzana","Pera","Sandia","Piña");

//SPREAD
var frutas = ["Naranja","Manzana"];

listadoFrutas( ...frutas , "Pera", "Sandia", "Piña");


//Funciones anonimas (No tienen nombre)

var pelicula = function(nombre){
    return "La pelicula es: "+ nombre;
}


pelicula("Rapido y furioso");


// Funcion callbacks

function sumame(numero1, numero2, sumaYmuestra, sumaPorDos){
    var sumar= numero1 + numero2;

    sumaYmuestra(sumar);
    sumaPorDos(sumar);

    return sumar;
}
// Funciones de flecha son iguales a las de callbacks
sumame(4, 6, function(dato){
    console.log("La suma es: ",dato);
}, dato => {
    console.log("la suma doble es: ", dato*2);
});


// transformaciones de textos

var numero = 444;
var text1 = "Bienvenidos al curso esto es una prueba de otro curso";
var text2 = "Estamos bien";

var dato = numero.toString();

dato = text1.toUpperCase();
dato = text2.toLowerCase();

console.log(dato);

var nombre = "Diego Gutierrez";

console.log(nombre.length);

//concatenar - unir textos

var textTotal = text1 + " " + text2;

var textTotal2 = text1.concat(" "+text2);

console.log(textTotal);
console.log(textTotal2);


//metodo de busqueda

var busqueda = text1.indexOf("curso");
var busqueda = text1.search("curso");
var busqueda = text1.match("curso"); // Arreglo de toda la informacion de esa palabra (Solo la primera)
console.log(busqueda);  //14   contando el 0 se encuentra la palabra

var busqueda2 = text1.lastIndexOf("curso"); // 47 encuentra el ultimo con la palabra curso
var busqueda = text1.match(/curso/g); // Cantidad de veces que aparece la palabra


var busqueda = text1.substr(14,5); //elimina la palabra en la posicion 14 y 5 letras

var busqueda = text1.charAt(15); // saca la letra de la casilla

var busqueda = text1.startsWith("Bienvenidos al"); //true evalua el inicio si se parece

var busqueda = text1.endsWith("otro curso"); //true evalua el final si se parece

var busqueda = text1.includes("prueba"); //Busca en la frase si existe la palabra

var busqueda = text1.replace("esto","estos"); //Cambia la palabra

var busqueda = text1.slice(14, 20); //borra todo hasta la casilla 14 y muestra solo de la 14 al 20

var busqueda = text1.split(); //mete todo el texto en un array 

var busqueda = text1.split(" "); //mete el texto en un array separadas las palabras

var busqueda = text1.trim(); //Quita los espacios de adelante y atras 




