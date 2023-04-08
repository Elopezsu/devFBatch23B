class MyArray {
    constructor(){
        this.length = 0
        this.data = {}
    }
    //obtener un elemento, dada una posicion/índice
    get(index) {
        return this.data[index]
    }
    push(item){
        this.data[this.length] = item
        this.length++
        return this.data
    }
    //Programar los métodos para mi arreglo personalizado de POO y shift
}

const list = new MyArray()
list.push("Hola")
list.push("Mundo")
console.log(list.get(2));