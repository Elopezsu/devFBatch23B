"use strict";

//DEFINICION: Javascript, es un lenguaje multiparadigma,
//principalmente orientado a objetos y basado en prototipos
//A los modos de hacer algo se le conocen como paradigmas y podemos programar
//con múltiples paradigmas. En la programación hay varias formas que ya están identificadas
//con ciertos patrones, y a eso se le conoce como un paradigma de programación
//Si programo usando clases y objetos, se le conoce como paradigma orientado a objetos
//Si programo usando funciones y closures, se le conoce como programación funcional
//o programación orientada a funciones
//Si uso estructuras simples o un código lineal, se le conoce como programación
//estructurada. Es más popular es poo

//Las clases y prototipos empiezan con mayúscula, como Animal
//Este prototipo tiene adentro un método que se llaman constructor
//Con el constructor construyo las propiedades de mi objeto o al final lo quitamos
//no lo necesitabamos para crear esto de abajo
//This es un apuntador hacia sí mismo. Podemos apuntar a funciones más arriba
//this por defecto en la consola es igual a window. Las default properties son
//Funciones dentro de un objeto. Son los métodos del objeto global window. El navegador
//le añade funcionalidad a javascript. Le añade funciones para hacerlo más compatible
//con el navegador. Todas esas funciones que le aporta el navegador al lenguaje, se guardan
//en un objeto, en el caso de los navegadores se llama window. El this global, le apunta al objeto
//global que se llama window y le apunta para decir que es el mismo

/*function Animal(){
            this.nombre = 'Cualquier animal';
            this.color = 'Cualquier color valido';
      }*/
      //con this, creamos propiedades. Creamos un prototipo que tiene dos propiedades. Le damos valor con =
      //este prototipo tiene unas propiedades fundamentales que usaremos como fábrica
      //y poder crear distintos objetos mediante la instancia de newAnimal
      //instanciar una clase quiere decir hacer referencia a ella

//console.log(Animal());

//puedo hacer que mi función tenga valores de nombre y color
function Animal(nombre,color) {
      this.nombre = nombre;
      this.color = color;
      this.sonidoAninal = function sonidoAnimal(){
            return 'Hola, estoy emitiendo el sonido de '+ this.nombre;
      }
};

//DEFINICION: Un objeto en Javascript es la instancia de un prototipo/function

const jirafa = new Animal("Jirafa", "Amarillo");
//cuando uso new estoy creando la instancia de un prototipo. En js sólo existen los prototipos
//no las clases. La estructura class es una mentira. Sólo existen prototipos
//y a partir de ellos puedo crear objetos. El prototipo se crea a partir de una función
//y esta pasa a ser una función constructora
//esta constante hace referencia a la clase function Animal que tiene una serie de propiedades
//y métodos y esta jirafa se queda con todas estas propiedades y métodos
//y puedo darle sus propios valores
//console.log(jirafa);
//console.log(jirafa.nombre);
//a partir del molde jirafa, puedo crear más moldes


const perro = new Animal ("Perro", "Cafe")
//console.log(perro);
console.log(perro.sonidoAninal());