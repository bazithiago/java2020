// console.log("2) Que tal se")

// // let diaDeSemana = "domingo";

// if (diaDeSemana === "domingo") {
//     console.log("Hoje é dia de futebol!!!")
// }
///

// console.log("3) Que tal se não")

// function hojeSeJoga(diaDeSemana) {

//     if (diaDeSemana === "domingo") {
//         return "Hoje é dia de futebol!!!"
//     } else {
//         return "Hoje não é dia de futebol :("
//     }
// }

// hojeSeJoga("domingo")
// hojeSeJoga("terça")

// console.log(hojeSeJoga("domingo"))
// console.log(hojeSeJoga("terça"))

///

// console.log("4) Qual é maior?")

// function eMaior (num1,num2) {
//     if (num1 > num2){
//         return num1
//     } else {
//         return num2
//     }
// }

// eMaior(4,5)
// eMaior(10,4)

// console.log (eMaior(4,5))
// console.log (eMaior(10,4))

////

// console.log("5) Qual é o seu sinal?")

// function sinal(number) {
//     if (number > 0) {
//         return 1
//     } 
//     if (number === 0) {
//         return 0
//     }
//     else {
//         return -1
//     }
// }   

// sinal(10)

// console.log(sinal(-20));

// console.log("6) O número da sorte")

// function eNumeroDaSorte(numero) {
//     return numero > 0 && (numero%3==0 || numero%2==0) && numero !== 15
// }

// console.log(eNumeroDaSorte(15));

console.log("7) Posso ir ao banco")

function possoIrAoBanco(diaDaSemana,horaAtual) {
    return (diaDaSemana !== "Sábado" && diaDaSemana !== "Domingo") && (horaAtual > 9 && horaAtual < 15)
}

console.log(possoIrAoBanco("Segunda",10));
