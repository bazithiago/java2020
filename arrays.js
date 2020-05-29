console.log("10. Contém:")

function contem(array,numero) {
    return array.indexOf(numero) !== -1
}

console.log(contem([1, 6, 3, 6], 3))
