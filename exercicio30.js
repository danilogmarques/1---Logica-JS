// 30 - Escreva um algoritmo para ler 10 números e ao final da leitura escrever a soma total dos 10 numeros lidos.

const prompt = require ('prompt-sync')()

let numero = 0
let soma = 0 
contador = 1

while ( contador <= 10 ){
    numero = Number(prompt('Digite um número '))
    contador ++ 
    soma = soma + numero
}

console.log(`A soma dosnúmeros digitados é ${soma}`)

