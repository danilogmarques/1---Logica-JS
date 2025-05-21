// 15 - Ler 3 valores e escrever eles em ordem crescente.

const prompt = require('prompt-sync')()

let primeiroValor = prompt('digite um valor ')
Number(primeiroValor)

let segundoValor = prompt('digite um valor ')
Number(segundoValor)

let terceiroValor = prompt('digite um valor ')
Number(terceiroValor)

if ( primeiroValor >= segundoValor )
    if( segundoValor >= terceiroValor){
            console.log( primeiroValor, segundoValor, terceiroValor)
        }else{
            console.log( primeiroValor, terceiroValor, segundoValor)   
        }if(segundoValor >= primeiroValor)
            if(primeiroValor >= terceiroValor){
            console.log(segundoValor, primeiroValor, terceiroValor)
        }if(terceiroValor >= segundoValor)
            if(segundoValor >= primeiroValor){
                console.log(terceiroValor, segundoValor, primeiroValor)
            }else{
                console.log(terceiroValor, primeiroValor, segundoValor)}

