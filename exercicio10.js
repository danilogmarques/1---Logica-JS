// 10 - Ler dois valores e escrever qual o maior valor.

const prompt = require ('prompt-sync')()

let primeiroValor = prompt ('Digite um número ')
    console.log(`primeiro valor digitado ${primeiroValor}`)
let segundoValor = prompt ('Digite um número ')
    console.log(`segundo valor digitado ${segundoValor}`)

if ( primeiroValor > segundoValor ){
    console.log( 'O primeiro valor é o maior ')
}else {
    console.log ( 'O segundo valor é o maior ');
}