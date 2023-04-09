//Sugar syntax. Detrás de escenas, es un prototipo

class Animal {
    //Aqui se construyen las propiedades de mi prototipo
    constructor (nombre, color){
        this.nombre = nombre;
        this.color = color;
    }
    //por fuera del constructor puedo crear mis métodos
    sonidoDeAnimal(){
        return 'Estoy emitiendo el sonido de ' + this.nombre;
    }
    //esto es un método
}
//esta clase se le conoce como azúcar sintáctica
//por fuera puedo crear mis prototipos con la sintaxis de clase
//pero por dentro estoy creando un prototipo a partir de una función constructora
//Al final estoy creando un prototipo, no una clase
//Por dentro sigo creando funciones. La clase es sólo para sintaxis
//Todo lo que va dentro del constructor son las propiedades, por eso sonidoDeAnimal
//va afuera, porque es un método

//El constructor nos permite crear las propiedas con la palabra reservada this
//de una función. Cuando coloco this dentro de un constructor, estoy construyendo
//propiedades. this. nombre es una propiedad y obtiene su valor del parámetro = nombre;
//

const jirafa = new Animal("Jirafa", "Amarillo");
//console.log(jirafa);
console.log(jirafa.sonidoDeAnimal());

const gato = new Animal("Gato Egipcio", "Nude")
console.log(gato.sonidoDeAnimal());