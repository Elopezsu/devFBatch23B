class Bebida{
    constructor(cantidad){
        this.cantidad = cantidad;
    }
}

class Refresco extends Bebida{
    constructor(cantidad, azucar){
        super(cantidad);
        this.azucar = azucar;
    }
}

class Cerveza extends Bebida{
    constructor(cantidad, porcentaje){
        super(cantidad);
        this.porcentajeAlcohol = porcentaje;
    }
}

const delawarePunch = new Refresco(600 + "ml", 10 + "gr");
const heineken = new Cerveza (355 + "ml", 5 + "%");
const cocacola2Litros = new Refresco(200 + "ml", 25 + "gr");
const hobgoblin = new Cerveza(500 + "ml", 9 + "%");