let paises = ["Mexico","Panama","Guatemala","El Salvador","Colombia","Peru"]
let paisLargo = "";
paises.forEach(function(elemento, indice){
    let letrasDelPais = lengthWithoutSpaces(elemento);

    if(letrasDelPais>lengthWithoutSpaces(paisLargo)){
        paisLargo = elemento;
    }
})
    console.log("El pais más largo es " + paisLargo);

    function lengthWithoutSpaces(str){
        return str.replace(/\s/g, '').length;
    }