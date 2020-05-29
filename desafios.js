console.log("Arvore utopica")

function tamanhoArvore(ciclos) {
    let tamanhoAtual = 1;
      
    for (let i = 1; i <= ciclos; i++) {
      if (i % 2 === 0) {
        tamanhoAtual += 1
      } else tamanhoAtual *= 2;
  }
    return tamanhoAtual
    }
  
  
  console.log(tamanhoArvore(3))

  