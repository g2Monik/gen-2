

window.onload = function ()
{
    alert("Practica Nueva");
    
var primerDiv= document.getElementById("primer");
var segundoDiv= document.getElementById("segundo");

console.log("El contenido de primero es: " + primerDiv.textContent);
console.log("El contenido de primero es: " + segundoDiv);

document.getElementById("primer").innerHTML = this.prompt("introduce un texto");
}

