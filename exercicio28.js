// 28 - Ler 10 valores e escrever a média aritmética desse valores lidos.

const prompt = require ("prompt-sync")()
let soma = 0 

let valor = 0 

for ( contador = 1; contador <=10; contador ++ ){

    valor = Number(prompt("Digite um número "))

    soma = soma + valor
    
};

 const media = soma / 10

 console.log(`A média dos valores é ${media}`)

