// 18 - Escreva um agoritmo para ler 2 valores e se o segundo valor informado for ZERO, deve ser lido um novo valor
// ou seja, para o segundo valor não pode ser aceito o valor zero 
// e imprimir o resultado da divisão do primeiro valor lido pelo segundo valor lido. (utilizar a estrutura FAÇA)

const prompt = require('prompt-sync')()

let valor1 = Number(prompt('Digite o primeiro número '))

let valor2 

do {
     valor2 = Number(prompt('Digite o segundo número (não pode ser zero)  '))
} while ( valor2 === 0) { 

    const resultadoDivisao = valor1 / valor2
    
    console.log(`O resultado da divisão dos dois número é ${resultadoDivisao}`)
}