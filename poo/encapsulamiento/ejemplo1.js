class Student {
    constructor(name, username, classes, address) {
        this.name = name
        this._username = username
        this.classes = classes
        this._address = address
        //cuando se escribe una clase y le queremos decir a los otros
        //programadores que es privada, usamos un _. Quien lo vea lo toma 
        //con cuidado
        //no tenemos la palabra private
        //this.address = address 
        /*Como yo sé que es una propiedad privada, para que alguien más pueda consultar esa propiedad
        tengo que definir una forma de hacerlo. Hay formars y se les conoce como getter. A continuación
        un ejemplo. Un getter es un método. No puedo acceder a la propieda address solo con getAddress
        por eso uso el get antes. Los getters nos dan pautas para acceder a esos valores privados
        
        */
    }

        get getAddress() {
            return this._address
        }
        //podemos modificar estos datos, como a continuación

        set validateUserName(newUserName){
            if (newUserName === "usuarioMaldito" || newUserName === "laCucaracha"){
            console.warn("No Haga eso,joven. Se ve MAL. Ya está grande xD");
            //estos warnings se ven en amarillo
            //con el set modifico propiedades privadas, los famosos setters
        }else{
            this._username = newUserName
            return newUserName
        }
    }
}

const emilio = new Student('Emilio', ["History", "Math", "Physics"], "Dillion Ave", "etc");
//metimos las clases en un arreglo: History, Math, etc


console.log(emilio.name);
console.log(emilio.classes);
//hacer esto puede ser perjudicial porque poniendo un dato personal
//o estoy exponiendo un dato sensible
//console.log(emilio._address); no podemos llamar a la dirección así sino como muestra a continuación

console.log(emilio.getAddress);
//console.log(emilio.validateUserName = "usuarioMaldito") - sale el mensaje en amarillo
//si elijo este usuario
console.log(emilio.validateUserName = "usuarioBueno")
