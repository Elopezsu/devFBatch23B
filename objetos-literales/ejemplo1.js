"use strict";

//objetos literales != objetos de poo (programación orientada a objetos) o opp (object oriented programming)

const jaguar = {
    //a los objetos literales se les asigna atributos/propiedades
    nombre: "Jaguar",
    color: "amarillo",
    //un método es una función definida dentro de un objeto
    funcionJaguar() {
        //Si meto una función dentro de un objeto no tengo porque
        //usar la palabra function, puedo llamarla de una vez funcionJaguar
        return "Gruñido de Jaguar";
    },
};

/*Puedo hacer un arrow function también y funcionaría igual que la función anterior

 funcionJaguar:() => {
        return "Gruñido de Jaguar";
    },
};
*/

/*Hay que ser muy cuidadosos al usar arrow functions en poo, en estos casos porque ellas no usan this
y necesitamos this para crear los prototipos. This es muy importante en programación orientada
a objetos.
Un objeto literal es una colección de atributos y métodos, normalmente relacionados entre sí
que se almacenan en una constante o en una variable. En programación en general se les conocen
como mapas pero en js se les conoce como objetos literales y en otros lenguajes como php
se les conoce como arreglos asociativos
*/

console.log(jaguar);

//Podemos acceder a los valores de nuestras propiedades
//mediante la notación de punto. Ejemplos a continuación:

//console.log(jaguar.color);
//console.log(jaguar.nombre);
//console.log(jaguar.funcionJaguar()); Uso los () para ejecutar el método;
//Usamos los e.gs anteriores para ejecutar los métodos. Elijo 1ro el objeto
//en este caso jaguar y con el punto accedo a los métodos que tiene dentro.
//A las funciones que hay en ese objeto


//Las funciones se ejecutan llamando a la función
//funcionJaguar()