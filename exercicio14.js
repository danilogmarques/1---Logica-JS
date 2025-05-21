// 14 - Ler 3 valores e informar o maior 

const prompt = require ('prompt-sync')()

let primeiroValor = Number(prompt ( ' digite um valor '))

let segundoValor = Number(prompt ( ' digite um valor '))

let terceiroValor = Number(prompt ( ' digite um valor '))

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