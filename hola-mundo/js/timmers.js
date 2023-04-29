'use strict'

window.addEventListener('load', () =>{
    var miCajaStyle = document.querySelector("#micaja").style;

    setTimeout(() => {
        
    }, 3000);
    function interval(){

        let repeat= setInterval(function(){
        
            console.log("Set intervalo ejecutado");
            if(miCajaStyle.fontSize == "50px"){
                miCajaStyle.fontSize = "30px";
                
            }else{
                miCajaStyle.fontSize = "50px";
                
            }
            console.log(miCajaStyle.fontSize);
            return 0;
        }, 2000);

        return repeat;
    }
    
    var repeat = interval();

    var stop = document.querySelector("#stop");
    var start = document.querySelector("#start");

    stop.addEventListener("click",() => {
        clearInterval(repeat);
        console.log("Paraste el intervalo de aumento de letras");

    });

    start.addEventListener("click",() => {
        interval();
        console.log("Paraste el intervalo de aumento de letras");
        
    });


});

