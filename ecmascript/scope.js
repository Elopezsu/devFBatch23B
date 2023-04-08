/*var nombre = "Erika";


function saludar(){
    let nombre = "Silvio";
    console.log("Hola " + nombre);
}

saludar();*/



/*function despedir(){
    let nombre = "Silvio";
    console.log("Adios "+ nombre);
}
function saludar(){
    let nombre = "Erika";
    console.log("Hola "+ nombre);
}

saludar();
//No va a funcionar o me va a dar error
console.log(nombre)*/

let apellido = "Romero";

function despedir(){
    let nombre = "Silvio";
    console.log("Adios "+ nombre);
}
function saludar(){
    let nombre = "Erika";
    console.log("Hola "+ nombre);
}

function bienvenida(apellido){
    console.log("Hola "+ apellido);
}

/*Es como si tuviera de manera invisible esta función. Es como si fuera
sustituida así, pero esto no es código, OJO
    function bienvenida("Juan"){
    let apellido = "Juan";

}*/


bienvenida("Juan");

//saludar();
//console.log(nombre)
