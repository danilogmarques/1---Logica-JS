// 14 - Ler 3 valores e informar o maior 

const prompt = require ('prompt-sync')()

let primeiroValor = prompt ( ' digite um valor ')
Number (primeiroValor)

let segundoValor = prompt ( ' digite um valor ')
Number (segundoValor)

let terceiroValor = prompt ( ' digite um valor ')
Number (terceiroValor)

if ( primeiroValor >= segundoValor )
    if ( primeiroValor >= terceiroValor){
        console.log( `o primeiro valor é o maior`)
    } else {
        console.log( `o terceiro valor é o maior`)
    }if ( segundoValor >= primeiroValor)
        if (segundoValor >= terceiroValor){
            console.log( ` o segundo valor é o maior`)
        } else {
            console.log( `o terceiro valor é o maior`)
        }