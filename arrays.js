console.log("20. Filtrados:")

function saldoDeMesesComLucro(umPeriodo) {

    var mesesLucrativos = []

    for (let mes = 0; mes < umPeriodo.length; mes++) {
        if (umPeriodo[mes] > 0) {
            mesesLucrativos.push(umPeriodo[mes])
        }

    } return mesesLucrativos

    
}

console.log(saldoDeMesesComLucro([100, 20, 0, -10, 10])) 

