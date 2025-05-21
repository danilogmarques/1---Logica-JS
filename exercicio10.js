// 10 - Ler dois valores e escrever qual o maior valor.

const prompt = require ('prompt-sync')()

let primeiroValor = prompt ('Digite um número ')
    primeiroValor = Number (primeiroValor);

let segundoValor = prompt ('Digite um número ')
    segundoValor = Number (segundoValor);

if ( primeiroValor > segundoValor ){
    console.log( 'O primeiro valor é o maior ')
} else {
    console.log ( 'O segundo valor é o maior ');
}