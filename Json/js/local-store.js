'use strcit'

//LocalStorage


//comprobar  disponibilidad del localstorage
if(typeof(Storage) != 'undefined'){
    console.log("localstorage disponible");
}
else{
    console.log("localstorage no disponible");
}

//Guardar datos

localStorage.setItem("titulo","Curso de Symfony");

//Obtener datos
console.log(localStorage.getItem("titulo"));

//guardar objetos

var usuario = {
    nombre: "Diego Gutierrez",
    email: "Diegut11_@hotmail.com",
    numero: "3133666260"
};

//Los JSON se tranforman en JSONSTRINGS para enviarlos


localStorage.setItem("usuario",JSON.stringify(usuario));

// Recuperar Objeto toca transformar JsonString a Json

var usuarioData = JSON.parse(localStorage.getItem("usuario"));
console.log(usuarioData);

// Acomodar en una tabla el json del locastorage

/*window.addEventListener('load', () =>{
    var movies = document.querySelector("#movies");

    var tr = document.createElement("tr");
    
    var td = document.createElement("td");
    
    td.append(usuarioData.nombre);
    tr.append(td);

    var td = document.createElement("td");
    td.append(usuarioData.email);
    tr.append(td);

    var td = document.createElement("td");
    td.append(usuarioData.numero);
    tr.append(td);
    
    movies.append(tr);

    localStorage.removeItem("usuario");
})*/
 

