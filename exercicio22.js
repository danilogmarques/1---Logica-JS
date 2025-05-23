// 22 - Ler um valor N e imprimir todos os valores inteiros entre 1 (inclusive). 
// considere que N será sempre maior que Zero.

const prompt = require('prompt-sync')()

let n = Number(prompt('digite um número '))

for ( contador = 1; contador <= n; contador ++){
    
    console.log(contador)
}