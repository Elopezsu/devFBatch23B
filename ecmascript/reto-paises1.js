const paises = ["Mexico", "Panama", "Guatemala", "El Salvador", "USA", "Alemania"];

function longestCountry(paises){
    let mayorPais = "";
    let mayorNumero = 0;

    for (let i=0; i < paises.length; i++){
        console.log(paises[i]);
        let pais = paises[i];
        let letras = pais.length;
        if (letras> mayorNumero){
            mayorNumero = letras;
            mayorPais = pais;
        }
    }
        return mayorPais;
};

longestCountry(paises);