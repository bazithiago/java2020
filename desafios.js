console.log("Escada")

function escada(number) {
   
    let resultado = [];

    for (let i = 1; i < number; i++) {
        resultado.push(" ".repeat(number - i) + "#".repeat(i));
    } ;
   
    return resultado;
   
   };

console.log(escada(5))

// ESSE MEU NÃO DEU NA PLATAFORMA, MAS DO BARINLY DEU E NÃO SEI ONDE TA A DIFERENCA. ACHEI! MAIOR IGUAL

function escada(numero) {

    let result = [];
   
    for (let i = 1; i <= numero; i++) {
   
      result.push(" ".repeat(numero - i) + "#".repeat(i));
   
    } ;
   
    return result;
   
   };