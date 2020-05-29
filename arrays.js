console.log("12. Mais prêmios:")

function medalhaDeAcordoComPosto(numero) {
    var medalhas = ["ouro","prata","bronze"];

    if (numero > medalhas.length) {
        return "nada"
    }
    else {
        return medalhas[numero-1]
    }
}

console.log(medalhaDeAcordoComPosto(4))