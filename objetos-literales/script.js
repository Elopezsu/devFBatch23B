let resultado = 0;
let n = 3;

while (numero> 1){
    resultado = resultado + n
    //resultado = 0 + 3 << 3
    //segunda vuelta: resultado = 3 + 2 << 5
    //tercera vuelta: resultado = 5 + 1 << 6
    //numero lo decrementamos en uno
    
    n--;

    //n = 3 - 1 << 2
    //segunda vuelta n = 2 -1 = 1
    //tercera vuelta n = 1 - 1 = 0
}

console.log (resultado)


