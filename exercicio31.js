// 34 - Uma loja está levantando o valor total de todas as mercadorias em estoque. Escreva um algoritmo 
// que permita a entrada das seguintes informações: 
// a) o número total de mercadorias no estoque;
// b) o valor de cada mercadoria.

// Ao final imprimir o valor total em estoque e a média de valor das mercadorias. 

const prompt = require ('prompt-sync')()


let quantidadeMercadorias = Number(prompt('Digite a quantidade de mercadorias '))

let valorMercadoria = 0 

valorTotal = 0

for ( contador = 1; contador <= quantidadeMercadorias; contador ++) { 

    valorMercadoria = Number(prompt('Digite o valor da mercadoria '))

    valorTotal = valorTotal + valorMercadoria
}

let media = valorTotal / quantidadeMercadorias 

console.log(`O valor total das mercadorias em estoque é de ${valorTotal} e a média dos valores é de ${media}`)