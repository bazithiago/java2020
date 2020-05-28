console.log ("8)Adicionando itens")

var umArray = [1,2,3];
var outroArray = [4, 5]

function mover(umArray,outroArray) {
    var pegarElemento = umArray.pop();
    outroArray.push(pegarElemento)
    
    return [umArray,outroArray]
} 

console.log(mover(umArray, outroArray));






// function mover(umArray, outroArray) {
//     var pegarElemento = umArray.pop();
//         outroArray.push(pegarElemento);
    
//     umArray;
//     outroArray;
    
//     }