"use strict";

//objetos literales != objetos de poo (programación orientada a objetos)

const jaguar = {
    //se les asigna atributos/propiedades
    nombre: "Jaguar",
    color: "amarillo",
    //un método es una función definida dentro de un objeto
    funcionJaguar () {
        return 'Gruñido de Jaguar';
    },
};

//Podemos acceder a los valores de nuestras propiedades
//mediante la anotación de punto

console.log(jaguar.funcionJaguar());