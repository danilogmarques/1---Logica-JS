// 10 - Ler dois valores e escrever qual o maior valor.

const prompt = require ('prompt-sync')()

let primeiroValor = Number(prompt ('Digite um número '))
    
let segundoValor = Number(prompt ('Digite um número '))

if ( primeiroValor > segundoValor ){
    console.log( 'O primeiro valor é o maior ')
} else {
    console.log ( 'O segundo valor é o maior ');
}