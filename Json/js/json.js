'use strcit'
window.addEventListener('load', () => {

    
    
    var movies = document.querySelector("#movies");
    var pelicula = {
        titulo: 'Batman vs Superman',
        year: 2017,
        pais: 'Estados unidos'
    };

    var peliculas = [
        { titulo: "La verdad duele", year: 2016, pais: "Francias" },
        pelicula
    ];

    console.log(peliculas);

    for (var element in peliculas) {
        
        console.log(peliculas[element]);

        var tr = document.createElement("tr");

        var td = document.createElement("td");
        td.append(peliculas[element].titulo);
        tr.append(td);

        var td = document.createElement("td");
        td.append(peliculas[element].year);
        tr.append(td);

        var td = document.createElement("td");
        td.append(peliculas[element].pais);
        tr.append(td);


        movies.append(tr);
        /*
        td.append(peliculas[element].titulo);
        
        tr.append(td);
        p.append(peliculas[element].year);
        movies.append(p);
        p.append(peliculas[element].pais);
        movies.append(p);
        */
    };
})
