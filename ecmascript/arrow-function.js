//Función clásica
function suma(a,b){
    return a+b;
}

/*En casos donde no es una sola línea, debo usar las llaves y return
const suma = (a,b) => {
    let c = a-b;
    console.log("Buenos días")
    return a + b;
}*/

//Función Flecha
const suma2 = (a,b) => {
    console.log("Si lleva más de una línea, lleva llaves y return")
    return a + b;
}

//Si tengo una sola línea, puedo ignorar las llaves
//y sólo colocar el resultado. Es una especie de abreviación

//Función Flecha una línea
const suma3 = (a,b) => a + b;
//const suma3 = (a,b) => {return a+ b};

console.log(suma3(7,7));
console.log(suma2(5,6));

//Estas tres funciones hacen lo mismo
//La función flecha tiene que se declarada primero antes de poder ser usada
//No puedo usar this. con la función flecha
