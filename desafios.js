console.log("Desafio Fatorial:")

function fatorial(numero) {
    var resultado = 1;

    for (var i = 1; i < numero; i++) {
        resultado *= i+1;
    } 
    return resultado;
}

console.log(fatorial(4));