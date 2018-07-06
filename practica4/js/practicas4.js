
/*   //Funciones anonimas
var a=parseInt(prompt("Dame un numero:"));
var b=parseInt(prompt("Dame un numero:"));

function suma(a,b){
    return a+b;
}
document.write("La suma es: " + suma(a,b));


document.write("el mensaje es: " + holaMundo());
function holaMundo(){
    return "Hola Mundituu!!";
}

/*
// Llamada a una funcion anonima
console.log(
    "El mensaje es: " +
    (function(){
        return "Hola Mundo 2";
    })()
);

// Llamada a una funcion anonima y manda parametros de suma
console.log(
    "La suma de los numeros es: " +
    (function(a,b){
        return a+b;
    })(numero1,numero2)
);

// Funcion Hola Mundo
function holaMundo(){
    return "Hola Mundo";
}

// Funcion suma de 2 numeros
function suma(a,b){
    return a+b;
}
*/


//Llamada a una funcion flecha para mostrar un mesaje.
//console.log("El mensaje es:" + 
//((num1,num2)=>num1+num2)(numero1,numero2)  ****Espaegthicode


/*
(()=> 
{
    return "Hola Mundo";
})
);

// version reducida
console.log("El mensaje es: " +
(()=> "Hola mundo")()
);

// version larga
console.log("La sssuma es: " +
((num1,num2)=>
{
    return num1+num2;
})(numero1,numero2)
)



//var numero1=parseInt(prompt("Dame un numero"));
//var numero2=parseInt(prompt("Dame un numero"));


function multiplicacion(){
    var resMultiplicacion=1;
    for(var i=0; i<arguments.length; i++){
        resMultiplicacion=resMultiplicacion*arguments[i];
    }
    return resMultiplicacion;
}

console.log("la multiplicacione es: "+ multiplicacion(2,2,2,2));

*/

//CONCATENAR PALABRAS

function concatenarPalabras(){}
    var palabra="";
    for (var i=0; i<arguments.length; i++){
        palabra= palabra+arguments[i];
    }
    return palabra; 
};

console.log("la palabra es: "+ concatenarPalabras("hola","yo"));


