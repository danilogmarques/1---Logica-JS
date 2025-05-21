// 13 - Faça um programa para ler a quantidade máxima, minima e atual de um estoque.
// calcule a quantidade média M = (qtd maxi + qtd mini )/2 se a quantidade atual for 
// maior ou igual a quantidade máxima  escrever "Não efetuar a compra" se estiver abaixo escrever "Efetuar a compra".

const prompt = require('prompt-sync')()

let quantidadeMaxima  = Number(prompt('digite a quantidade máxima do estoque '))

let quantidadeMinima = Number(prompt('digite a quantidade minima do estoque '))

let quantidadeAtual = Number(prompt('digite a quantido atual do estoque '))


media = ( quantidadeMaxima + quantidadeMinima ) / 2 

if( quantidadeAtual >= quantidadeMaxima  ){
    console.log(`O estoque é de ${media} e está bom, não efetuar a comprar`)
}else {
    console.log(`O estoque é de ${media} e está baixo, efetuar a compra`)
}