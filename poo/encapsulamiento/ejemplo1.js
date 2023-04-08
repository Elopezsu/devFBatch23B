class Student {
    constructor(name, username, classes, address) {
        this.name = name
        this._username = username
        this.classes = classes
        this._address = address
    }
    get getAddress() {
        return this._address
    }

    set validateUserName(newUserName){
        if (newUserName === "usuarioMaldito" || newUserName == "laCucaracha"){
            console.warn("No Haga eso,joven. Se ve MAL. Ya está grande xD");
        }else{
            this._username = newUserName
            return newUserName
        }
    }
}

const emilio = new Student('Emilio', ["History", "Math", "Physics"], "Dillion Ave", etc);

console.log(emilio.name)
console.log(emilio.classes)
console.log(emilio.getAddress)
console.log(emilio.validateUserName = "usuarioMaldito")
