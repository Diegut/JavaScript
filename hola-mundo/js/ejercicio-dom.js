'use strict'

window.addEventListener('load', () =>{

    var form = document.querySelector("#form-data");
    var textNameData = document.querySelector("#data-name");
    var br = document.createElement("br");
    var dataTitles = ['Nombre: ', 'Apellidos: ', 'Edad: '];
    var boxShowData = document.querySelector(".dashes");

    boxShowData.style.display = "none";
    
    
    function showDataName(dataPersonal){

        console.log(dataPersonal);
        for(var element in dataPersonal){
            var p = document.createElement("p");
            var span = document.createElement("span","strong");
            span.append(dataTitles[element]);
            textNameData.append(span);
            p.append(dataPersonal[element]);
            textNameData.append(p);
        }
        
    };

    form.addEventListener('submit', () => {
        var nameData = form.querySelector("#name").value;
        var nameDataStyle = form.querySelector("#name").style;
        var lastNameData= document.querySelector("#form-data #last-name").value;
        var lastNameDataStyle = form.querySelector("#form-data #last-name").style;
        var ageData = parseInt(form.querySelector("#age").value);
        var ageDataStyle = form.querySelector("#age").style;
        var checkName = false;
        var checkLastName = false;
        var checkAge = false;

        if(nameData.trim() == null || nameData.trim().length == 0){
            
            nameDataStyle.border = "1px solid red";
            checkName = false;
            
        }
        else{
            checkName = true;
            nameDataStyle.border = "1px solid green";
        }
        if(lastNameData.trim() == null || lastNameData.trim().length == 0){
            
            lastNameDataStyle.border = "1px solid red";
            checkLastName = false;
        }
        else{
            checkLastName = true;
            lastNameDataStyle.border = "1px solid green";
        }
        if(ageData == null || ageData <= 0 || isNaN(ageData)){
            ageDataStyle.border = "1px solid red";
            checkAge = false;
        }
        else{
            checkAge = true;
            ageDataStyle.border = "1px solid green";
        }
        if(checkName && checkLastName && checkAge){

            var dataPersonal = [nameData, lastNameData, ageData];
            boxShowData.style.display = "block";
            showDataName(dataPersonal);
            
        }
        
        return 0;
    });



})