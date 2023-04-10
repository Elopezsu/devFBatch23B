class Electrodomestico{
    constructor(precio, color, capacidad){
        this.consumoEnergetico = 100;
        /*{
            voltaje: 100,
            tipo: "x1"
        };*/
            this.precio = precio;
        this.color = color;
        this.capacidad = capacidad;
    }
}

class Lavadora extends Electrodomestico{
    constructor(precio, color, capacidad, carga){
        super(precio, color, capacidad);
        this.carga = carga;
    }
    consumoFinal(){
        return this.consumoEnergetico * this.carga;
    }
}

let lavadora_old = new Lavadora("$"+1500, "Blanca", 200, 20);
const lavadora = new Lavadora ("$"+7000, "Gris", 14500, 20);

document.getElementById("lavadora").innerHTML = `
        <h1>Precio: ${lavadora.precio}</h1>
        <p>Color ${lavadora.color}</p>
        <p>Capacidad ${lavadora.capacidad}</p>
        <p>Carga ${lavadora.carga}</p>
        `