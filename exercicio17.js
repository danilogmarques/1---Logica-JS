// 17 - Escreva um algoritmo para ler 2 valores e se o segundo valor informado for ZERO ,
// dever ser lido um novo valor, ou seja, para o segundo valor não pode ser aceito o valor zero 
// e imprimir o resultado da divisão do primeiro valor lido pelo segundo valor lido. (utilizar a estruta repitad)

const prompt = require('prompt-sync')()


let valor1 = Number(prompt('digite um valor '))

let valor2 = Number(prompt('digite um valor '))

while ( valor2 === 0 ) {
    
    valor2 = Number(prompt('digite um valor diferente de zero '))
    }

let resultadoDivisao = valor1 / valor2


console.log(`O resultado da divisão dos dois número é ${resultadoDivisao}`)




    
