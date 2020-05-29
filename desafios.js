console.log("maisMenos")

function maisMenos(array) {
    let positivos = [];
    let zeros = [];
    let negativos = [];


    for (let i = 0; i < array.length; i++) {
        if(array[i] > 0) {
            positivos.push(array[i]);
        } else if (array[i] == 0) {
            zeros.push(array[i]);
        } else {
            negativos.push(array[i]);
        }
    }
    
    let compilados = [(positivos.length/array.length) , (zeros.length/array.length) , (negativos.length/array.length)];

    return compilados;
}

console.log(maisMenos([1, 2, 0, -1]))