class Animal {
    constructor(nombre, color) {
        this.nombre = nombre;
        this.color = color;
    }
    sonidoDeAnimal() {
        return "Estoy emitiendo el sonido de " + this.nombre;
    }
}
//Tomamos este arreglo del ejemplo anterior de Kike

/*class Perro{
    constructor(pulgas,peludo){
        this.pulgas = pulgas;
        this.peludo = peludo;
    }

    ladrar(){
        return "guau";
    }
}

//Tenemos dos clases parecidas, Animal y Perro. Perro y animal están relacionados pero son totalmente
//distintos
//Voy a instanciar a cada uno de la clase Animal

const perro = new Perro(2, true);
//esto quiere decir que tiene 2 pulgas y con true, que es peludo
const animal = new Animal("Jaguar", "Negro");*/


//Extends es una palabra reservada que va a relacionar una clase con
//una clase superior. En esta caso el padre de Perro es Animal
//Herado sonidodeAnimal como el nombre y el colors

class Perro extends Animal {
    constructor(nombre, color, pulgas, peludo){
        super(nombre,color);
        this.pulgas = pulgas;
        this.peludo = peludo;
    }
    ladrar(){
        return "guau";
    }
}
//Pasamos a establer que tiene las propiedas del padre, agregando nombre y color entre ()
//porque sólo existian pulgas y peludo
//le agrego el nombre y el color en la constante como vemos abajo
//Le pasamos estas nuevas dos propiedades al constructor con super

const perro = new Perro ("Perro", "Azul", 2, true);



class Gato extends Animal {
    constructor(nombre, color, pulgas,peludo){
        super(nombre,color);
        this.pulgas = pulgas;
        this.peludo = peludo;
    }
    maullar(){
        return "miau";
    }
}
const gato = new Gato ("Gato", "Rosa", 5, false);


/*class FruFru extends Gato{
    constructor(nombre, color, pulgas, peludo, edad){
        super(nombre,color, pulgas, peludo);
        this.edad =  edad;
    }
}

const frufru = new FruFru("Gato", "Rosa", 5, false, 7)*/

class FruFru extends Gato{
    constructor(nombre, color, pulgas, peludo, edad){
        super(nombre,color, pulgas, peludo);
        this.edad =  edad;
        this.pulgas = pulgas;
        this.peludo = peludo;
    }
}

const frufru = new FruFru("Gato", "Rosa", 5, false, 7)


//const animal = new Animal ("Jaguar","negro");

