// 19 - Acrescentar um mensagem de "valor inválido" no exercicio 17 caso o segundo valor informado seja zero

const prompt = require('prompt-sync')()


let valor1 = Number(prompt('digite um valor '))

let valor2 = Number(prompt('digite um valor '))

while ( valor2 === 0 ) {
    
    valor2 = Number(prompt('valor inválido '))
    }

let resultadoDivisao = valor1 / valor2


console.log(`O resultado da divisão dos dois número é ${resultadoDivisao}`)