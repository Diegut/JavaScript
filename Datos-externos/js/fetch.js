'use strict';

//Fetch (ajax) y peticiones a servicios / apis rest

var users = [];

var div_users = document.querySelector("#users");
var div_user = document.querySelector("#selectUser");

getUsers()
    .then(data => data.json())
    /*
    .then(users => {
        listUsers(users);

        
        return getInfo();
    })
    .then(user => {
        listUser(JSON.parse(user));
        console.log(JSON.parse(user));
        return getUser();
    })
    .then(data => data.json())
    .then(data => {
        console.log(data);
    });
*/
function getUsers() {
    return fetch('https://api.xero.com/api.xro/2.0/Invoices')
}

function getUser(){
    return fetch('https://jsonplaceholder.typicode.com/users/2')
}

function getInfo(){

   
    var estudiante = {
        nombre: 'Diego',
        apellido: 'Gutierrez',
        email: 'Diegut11@gmail.com'
    };

    return new Promise((resolve, reject) =>{

        var estudiante_string = null ;

        setTimeout(function(){
            estudiante_string = JSON.stringify(estudiante);
            if(typeof estudiante_string != 'string' || estudiante_string == null){

                return reject('error 1');
            }
            else{
                
                return resolve(estudiante_string);
            }
        }, 3000);
        

        
       
    });

    
}


function listUsers(users) {

    users.map((user, i) => {
        let name = document.createElement('h3');

        name.append(i + ".  " + user.id + " " + user.name + "  " + user.email);

        div_users.appendChild(name);
    });

    document.querySelector(".loading").style.display = 'none';
}

function listUser(user) {

   
    let name = document.createElement('h4');

    name.append("User Search:" + "  " + user.nombre + " " + user.apellido + "  " + user.email);

    div_user.appendChild(name);
    
    document.querySelector(".searching").style.display = 'none';
}





