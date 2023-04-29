'use strict'

// DOM Document Model Object

function cambiaColor(color){
    caja.style.background = color;
}

// Elementos con un ID concreto

// var caja = document.getElementById("micaja"); //Dato completo todo el html

var caja = document.querySelector("#micaja"); //
//var caja = document.getElementById("micaja").innerHTML; //Contenido del html (Hola soy una caja)

caja.innerHTML = "Texto en la caja desde JS"; // Cambiando el contenido

 //cambiando estilos css
caja.style.background = "red";
caja.style.padding = "20px";
caja.style.color = "white";

caja.className = "hola hola2"; //añadir clases

cambiaColor("green");


// Elementos por su etiqueta

var todosLosDivs = document.getElementsByTagName('div');

console.log(todosLosDivs[2].innerHTML);

todosLosDivs[2].innerText = "Otro texto para el segundo elemento";
todosLosDivs[2].style.background = "red";
todosLosDivs[2].style.padding = "20px";
todosLosDivs[2].style.color = "white";

var selection = document.querySelector("#misection")
var hr = document.createElement("hr");

for( var element in todosLosDivs){
    if(typeof todosLosDivs[element].textContent == 'string'){   //Forma machetasa para dar solucion de la toma de datos extras
        var parrafo = document.createElement("p");
        var texto = document.createTextNode(todosLosDivs[element].textContent);
        parrafo.append(texto);   //Pone al principio dentro del bloque Parrafo
        selection.append(parrafo);  //Pone al final en el bloque selection lo del parrafo
        
    }
}
    
selection.append(hr);

var divsRojos = document.getElementsByClassName('red');
var divsYellow = document.getElementsByClassName('yellow'); //Seleccion por nombre de class para todos
console.log(divsRojos);

for(var element in divsRojos){
    divsRojos.item(element).style.background = "red";   //forma correcta de manejar los items del array, sin tocar otros
    divsRojos.item(element).style.color = "white";
}

for(var element in divsYellow){
    divsYellow.item(element).style.background = "yellow";   //forma correcta de manejar los items del array, sin tocar otros
    divsYellow.item(element).style.color = "black";
}


//Query selector
var classRed= document.querySelectorAll(".red");  //Selecciona con el query solo 1 (depende como se ponga #id .class elemento)

var allClassRed= document.querySelectorAll(".red"); //Selecciona con el query todos en Array (depende como se ponga #id .class elemento)

console.log(allClassRed);
console.log(todosLosDivs);


console.log(caja);
