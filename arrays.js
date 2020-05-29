console.log("21. Naipe de truco:")

function naipeDeTruco(naipe) {

    var baralho = []

    for (let i = 1; i < 13; i++) {
        if (i < 8 ) {
            baralho.push(i + " de " + naipe)
        }
        if (i > 9 ) {
            baralho.push(i + " de " + naipe)
        }
    } return baralho

    
}

console.log(naipeDeTruco("espadas")) 

