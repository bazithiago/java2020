function dobro(numero) {
    return numero*2;
}

dobro(10);
dobro(100);

console.log(dobro(10));
console.log(dobro(100));

//

function metade(numero){
    return numero/2;
}

metade(50);
metade(10);
console.log(metade(50));
console.log(metade(10));

console.log("Multiplicar")
function multiplicar(numero1,numero2){
    return numero1 * numero2;
}

multiplicar(2,3);
console.log(multiplicar(2,3));

console.log("5) Triplo da soma:")

function triplo(number) {
    return number*3
}

function triploDaSoma(parametro1,parametro2) {
    let resultadoDaSoma = parametro1 + parametro2;
    return triplo(resultadoDaSoma);
}

triploDaSoma(1,2)
console.log(triploDaSoma(1,2));

console.log("6) Fórmulas e funções:")

function perimetro(raio) {
    return 3.14 * raio * 2
}
function area(raio) {
    return 3.14 * raio * raio
}
perimetro(10);
area(10);
console.log(perimetro(10));
console.log(area(10));

console.log("7) Operando strings:")

function tamanhoNomeCompleto(nome,sobrenome) {
    let espaco = " ";
    return nome.length + espaco.length + sobrenome.length;
}

tamanhoNomeCompleto("Enzo","Silva");
console.log(tamanhoNomeCompleto("Enzo","Silva"));

console.log("8) CriandoCartao:")

function escreverCartao(titulo,nome,sobrenome) {
    return titulo + " " + nome + " " + sobrenome
}
escreverCartao("Dra.","Ana","Perez");
console.log(escreverCartao("Dra.","Ana","Perez"));

console.log("10) Probabilidade:")
function gerarProbabilidade() {
    return Math.floor(Math.random()*100)
}
gerarProbabilidade();
console.log(gerarProbabilidade());
