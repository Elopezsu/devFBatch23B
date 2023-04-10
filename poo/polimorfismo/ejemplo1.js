//poli es muchos
//morfismo son formas
//en js no existe el concepto de multiherencia

class Animal {
    constructor(nombre, color){
        this.nombre = nombre
        this.color = color
}
    saludo(){
        return "Hola, soy un animal genérico..."
    }
}

class Perro extends Animal {
    constructor(nombre, color, raza){
        super(nombre, color)
        this.raza = raza
    }
    //sobre escribo el método saludo para sobre escribir el saludo inicial
    //de Hola, soy un animal genérico
    //aqui el polimorfismo es en el método saludo, donde sobre escribimos
    //el saludo. Puedo aplicar esto con otras clases

    saludo(){
        return "Hola, soy " + this.nombre + ", ¿Dónde está Charlie?"
    }
}

const snoopy = new Perro("Snoopy", "Blanco", "Dalmata")
console.log(snoopy.nombre);
console.log(snoopy.saludo());