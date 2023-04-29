'use strict'

var formPel = document.querySelector("#formPeliculas");

var i=0,j=0;

formPel?.addEventListener('submit', function () {
    
    var peliculas = {
        titulo: '',
        year: 0,
        pais: ''
    };
    peliculas.titulo = document.querySelector("#titlePelicula").value;
    peliculas.year = document.querySelector("#yearPelicula").value;
    peliculas.pais = document.querySelector("#countryPelicula").value;

    if(peliculas.titulo.length >= 1){
        
        localStorage.setItem("pelicula"+i, JSON.stringify(peliculas));
        i++;
        insertTable(peliculas);
    }
    
});


function insertTable(peliculas) {

    var movies = document.querySelector("#movies");

    var tr = document.createElement("tr");

    var td = document.createElement("td");

    td.append(peliculas.titulo);
    tr.append(td);

    var td = document.createElement("td");
    td.append(peliculas.year);
    tr.append(td);

    var td = document.createElement("td");
    td.append(peliculas.pais);
    tr.append(td);

    movies.append(tr);
}

window.addEventListener('load', () => {

    for (var key in localStorage){
        if(key == "pelicula"+j.toString()){
            
            var peliculaLocalStorage = JSON.parse(localStorage.getItem("pelicula"+j));

            
            insertTable(peliculaLocalStorage);
            j++;
            i++;
        }
    }

})
