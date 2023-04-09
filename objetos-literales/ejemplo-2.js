"use strict";

const cinthya = {
    //Idealmente, si le pones "" a un atributo,que puedo hacerlo para
    //separarlos por espacios en vez de _; es importante saber que para mantener
    //mi codigo uniforme, tengo que añadir "" a todos demás atributos
    //primer_nombre, apellido and so on, les decimos claves
    primer_nombre: "Cinthya",
    apellido: "Garcilazo",
    intereses: ["Libros", "Tatuajes", "Cajeta"], //puedo almacenar arreglos dentro de un objeto literal
    x1: "uno",
    x2:"dos",
};

//console.log(cinthya); esto nos arroja on object en la consola
//console.log(cinthya.primer_nombre);

//const nombre = "primer_nombre";
//console.log(cinthya[nombre]); nada cambia con respecto al ejemplo anterior
//Se mantiene igual


//const clave = "apellido";
//console.log(cinthya[clave]); a traves de los [] puedo tener acceso a la clave
//en este caso, el apellido

//ahora quiero acceder a los intereses
//const clave = "intereses";
//console.log(cinthya[clave]);
//IMPORTANTE: Para poder acceder a los valores/atributos de un objeto
//puedo hacerlo medianta notación de punto o notación de []

//console.log(cinthya["apellido"]);
//Lo bueno de la notación de [] es que puedo guardar claves o variables
//y nada más llamar la variable como en el caso de apellido

/*ESTO VA DESPUÉS DE HABER AGREGADO X1 Y X2
*/

console.log(cinthya["apellido"]);
//console.log(cinthya["x2"]);
console.log(cinthya["x" + 1]);
//La notación de punto es estática mientras que la de []
//es dinámica. Dentro de los [] puedo agregarle operaciones matemáticas, lógica
