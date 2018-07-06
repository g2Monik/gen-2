

/*  // Elegir el numero mayor

var num1=parseInt(prompt("Dame un numero:"));
var num2=parseInt(prompt("Dame un numero:"));
var num3=parseInt(prompt("Dame un numero:"));

if(num1 > num2 && num1 >num3){
 document.write("El numero mayor es: " + num1);
}
if(num2 > num1 && num2 >num3){
    document.write("El numero mayor es: " + num2);
}
if(num3 > num1 && num3 >num2){
    document.write("El numero mayor es: " + num3);
}
*/


/*   //dias dela semana

var dia1=parseInt(prompt("Dame un numero del 1 al 7:"));

switch(dia1){
    case(1):document.write("Lunes " ); break;
    case(2):document.write("Martes " );break;
    case(3):document.write("Miercoles ");break;
    case(4):document.write("jueves" );break;
    case(5):document.write("Viernes" );break;
    case(6):document.write("Sabado " );break;
    case(7):document.write("Domingo " );break;
    default:document.write("Ese no es un dia valido!! " );
    
} */

/*   ALGORITMO DE BREAK
var contador =0;
var respuesta ="S";
while(true){
document.write("el contador es" + contador);
  respuesta =prompt("otro ciclo S/N");
  if (respuesta != "S"){
    break;
  }else{
    contador++;
  }
}
*/

/*
//ALGORITMO DE CONTINUE
var contador=1;
var num =parseInt(prompt("Dame un numero"));
for(contador =1; contador<num; contador++){
    if(contador%2==0)
        continue;
    else 
        document.write("numero impar" + contador);
}

//Mismo Algoritmo que el anterior con el ciclo while

contador =1;
while(contador<num){
    if(contador%2==0);
     continue;

}
*/

/*
//Algoritmo de vectores

var nombre= prompt("Dame tu nombre");
var vector=[];


for(var contador=0; contador<100;contador++){
  vector[contador]=nombre +"/n"+contador;
}
for(contador=0; contador<100;contador++){
    document.write(" nombre_ " + contador + " : " +vector[contador]) ;
    
  }
*/

