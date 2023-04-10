//En la vida real no voy a crear estas estructuras pero me ayudan a
//interiorizar el concepto de Array

class MyArray {
    constructor(){
        this.length = 0
        //un arreglo va a tener cero elementos
        this.data = {}
        //dentro de este arreglo van datos. Para eso uso .data
        //estos datos van a estar dentro de un lugar vacío
    }
    //quiero obtener un elemento, dada una posicion/índice
    //por eso uso el método de acá abajo
    get(index) {
        return this.data[index]
    }
    push(item){
        //le digo que empuje un elemento o item
        this.data[this.length] = item
        //con length me posiciono en la posición actual del objeto
        this.length++
        return this.data
        //retorno la data que ya se modificó
    }
    //usamos push para agregar elementos a un arreglos
    //IMPORTANTE: Programar los métodos para mi arreglo personalizado de POO y shift
}

const list = new MyArray()
console.log(list);
list.push("Hola")
list.push("Mundo")
console.log(list.get(0));
//get me pide un indice para poder acceder a mi arreglo
//le dimos el 2 indicando la posición 0 primero y me da como resultado
//Hola. Si le pongo 1, me da Mundo. Si le asigno 2 me da undifined
//porque no existe
