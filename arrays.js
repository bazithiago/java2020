console.log("18. Contagens:")

function quantidadeDeMesesComLucro(umPeriodo) {

    var quantidade = 0

    for (let mes = 0; mes < umPeriodo.length; mes++) {
        if (umPeriodo[mes] > 0) {
            quantidade += 1
        }
            
    } return quantidade
}

console.log(quantidadeDeMesesComLucro([1,1,-2,3]))


