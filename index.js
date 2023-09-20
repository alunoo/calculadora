const prompt = require("prompt-sync")();

console.log("Calculadora Simples\n\n")

let n1 = parseFloat(prompt("Infome o primeiro número: "));
let n2 = parseFloat(prompt("Infome o segundo numero: "));

let resultMais = n1+n2
let resultMenos = n1-n2
let resultDiv = n1/n2
let resultVez = n1*n2

console.log("\nDeseja qual calculadora?\n\n1 - SOMA\n2 - SUBTRAÇÃO\n3 - DIVISÃO\n4 - MULTIPLICAÇÃO\n");

let operacao = parseFloat(prompt())


if(operacao === 1 ){
    console.log("O resultado da operação é: ",resultMais)
}
if(operacao === 2){
    console.log("O resultado da operação é: ",resultMenos)
}
if(operacao === 3){
    console.log("O resultado da operação é: ",resultDiv)
}
if(operacao === 4){
    console.log("O resultado da operação é: ",resultVez)
}