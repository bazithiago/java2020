console.log("Desafio Professora Furiosa:")

let alunosDeSegunda = [10, -5, -3, -1]
let alunosDeTerca = [7, -5, -3, ,3]
let alunosDeQuarta = [10, -5, -3, 1,2]

function acontece(diaDaSemana, quantidadeMinima) {

    let quantidadeAlunos = 0;

    for (let i = 0; i < diaDaSemana.length; i++) {

        if (diaDaSemana[i]>=0) quantidadeAlunos++;
        if (quantidadeAlunos >= quantidadeMinima) return true;
    }
    return false
}

function aberturas(diaDaSemana,quantidadeMinima) {
    let listaCompleta = [];

    for (let i = 0; i < diaDaSemana.length; i++) {
        
        listaCompleta.push(acontece(diaDaSemana[i], quantidadeMinima));
    }
    return listaCompleta;
}

console.log(aberturas([alunosDeSegunda,alunosDeTerca,alunosDeQuarta], 2))



// A MINHA DEU CERTO AQUI MAS ERRADO LÁ, COLEI DO BRAINLY, MAS SEM ENTENDER O QUE TA DIFERENTE

function acontece (alunosDia, quorum){

       let presentes = 0;
    
       for (let i = 0; i < alunosDia.length; i++){
    
         if (alunosDia[i] <= 0) presentes++;  
    
         if (presentes >= quorum) return true;
    
       }
    
       return false;  
    
    }
    
    function aberturas (alunosDia, quorum){
    
       let resultadoArray = [];
    
       for (let i = 0; i < alunosDia.length; i++){
    
        resultadoArray.push(acontece(alunosDia[i], quorum));
    
       }
    
       return resultadoArray;  
    
    }
    
    Leia mais em Brainly.com.br - https://brainly.com.br/tarefa/24484444#readmore