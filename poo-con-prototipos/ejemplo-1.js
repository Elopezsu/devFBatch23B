"use strict";

//Definicion: Javascript, es un lenguaje multiparadigma,
//principalmente orientado a objetos y basos en prototipos

function Animal(nombre,color) {
      this.nombre = nombre;
      this.color = color;
};

//DEFINICION: Un objeto en Javascript es la instancia de un prototipo/function

const jirafa = new Animal("Jirafa", "Amarillo");
const perro = new Animal ("Perro", "Cafe")

console.log(jirafa);
console.log(perro);