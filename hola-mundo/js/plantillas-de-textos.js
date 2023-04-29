'use strict'

// plantillas de texto

var nombre = prompt ("TU NOMBRE");
var apellidos = prompt ("TU APELLIDOS");

// var text = " Mi nombre es: "+ nombre + "<br> Mis apellidos son:" + apellidos;

// alt +  96 = `

var text = `
    <h1>Hola que tal</h1>
    <h3>Mi nombre es: ${nombre}</h3>
    <h3>Mi apellidos son: ${apellidos}</h3>
`;

document.write(text);


// Arrays

var nombres=["Carlos Perez", "Manuel Castro", "Camilo Pacheco", 63, true];

var lenguajes = new Array("PHP", "JS", "GO", "Java");


document.write("<h1>Lenguajes de programacion</h1>");
document.write("<ul>");
console.log(lenguajes.length);
/*
for(var i = 0; i < lenguajes.length; i++){
    document.write("<li>"+lenguajes[i]+"</li>");
}*/

lenguajes.forEach( lenguaje => {
    document.write("<li>" + lenguaje + "</li>");
});

lenguajes.forEach( (lenguaje, index, data) => {
    document.write("<li>" + index +" - "+lenguaje + "</li>");
    console.log(data);
});

//for in

for(let lenguaje in lenguajes){
    document.write("<li>" + lenguaje +" - "+ lenguajes[lenguaje] + "</li>");
}

document.write("</ul>");


lenguajes.push("C++");  //agrega

lenguajes.push("ERROR");
lenguajes.pop();     // Elimina


//eliminar un dato del arreglo especifico
var indice = lenguajes.indexOf('JS');

if(indice > -1){
    lenguajes.splice(indice, 1);   //Elimina 
}


// convertir array a texto

var peliculas_string = lenguajes.join();

//convertir string a array
var cadena = "text1, texto2, texto3";
var cadena_array = cadena.split(", ");

//ordenar un array

lenguajes.sort(); //alfabeticamente

lenguajes.reverse(); //Ordena al contrario al reves


// Busqueda

var busqueda = lenguajes.find(lenguaje => lenguaje == "PHP");

var busqueda = lenguajes.findIndex(lenguaje => lenguaje == "PHP");

//busqueda por comparativa
var precios = [10, 15,20, 30, 50, 80, 120];

var busqueda = precios.some(precio => precio > 20) //true hay mayores de 20