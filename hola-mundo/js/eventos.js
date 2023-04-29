'use strict'

//eventos del raton
window.addEventListener('load', () => {
    main();
});

function main(){
    var buttonStyle = document.querySelector("#button").style;
    var buttonStyleColor = buttonStyle.background;
    buttonStyle.padding = "10px";
    buttonStyle.borderRadius = "10px";
    buttonStyle.color = 'white';
    
    function cambiarColorBoton(){
        
        if(buttonStyleColor != 'blue'){
            buttonStyle.background = 'blue';
            buttonStyle.border = "1px solid blue";
            buttonStyleColor = buttonStyle.background;
        }
        else{
            buttonStyle.background = 'red';
            buttonStyle.border = "1px solid red";
            buttonStyleColor = buttonStyle.background;
        }
        
        return 0;
    }
    
    var boton = document.querySelector("#button");
    
    boton.addEventListener('click', () => {
        cambiarColorBoton();
        
        //this.style.border = "3px solid #ccc";
    });
    
    // Mouse over
    
    boton.addEventListener('mouseover', () => {
    
        buttonStyle.background = 'gray';
    })
    
    
    // Mouse over
    
    boton.addEventListener('mouseout', () => {
        buttonStyle.background = buttonStyleColor;
    })
    
    
    var input = document.querySelector("#campo_nombre");
    
    // Focus
    input.addEventListener('focus', () => {
        console.log("Estas dentro del input (Focus)");
    });
    
    // Blur
    input.addEventListener('blur', () => {
        console.log("Estas fuera del input (Blur)");
    });
    
    //Keydown
    
    input.addEventListener('keydown', (event) => {
        console.log("(Keydown) pulsando tecla", String.fromCharCode(event.keyCode));
    });
    
    //Keypress
    
    input.addEventListener('keypress', (event) => {
        console.log("(Keypress) tecla presionada", String.fromCharCode(event.keyCode));
    });
    
    //keyup
    input.addEventListener('keyup', (event) => {
        console.log("(Keyup) tecla soltada", String.fromCharCode(event.keyCode));
    });
}
