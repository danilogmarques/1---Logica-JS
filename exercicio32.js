// 32 - O mesmo exercicio anterior, mas agora não será informado o número de mercadorias em estoque
// Então o funcionamento deverá ser da seguinte forma : ler o valor da mercadoria e perguntar ' Mais mercadoria S/N ? '
// Ao final, imprimir o valor total em estoque e a média de valor das mercadorias em estoque .

const prompt = require ('prompt-sync')()

let quantidadeMercadorias = Number(prompt('Digite a quantidade de mercadorias '))

let valorMercadoria = 0 

let valorTotal = 0

for ( contador = 1; contador <= quantidadeMercadorias; contador ++) { 

    valorMercadoria = Number(prompt('Digite o valor da mercadoria '))

    valorTotal = valorTotal + valorMercadoria
}

let media = valorTotal / quantidadeMercadorias 

console.log(`Temos ${quantidadeMercadorias} mercadorias e a média de valores é ${media}`)

let pergunta = (prompt('Deseja comprar mais mercadoria S/N ? '))

let mercadoriasAdicionadas = 0
let valorNovasMercadorias = 0
let valorAtualizado = 0 


    if ( pergunta === "S" ){
        mercadoriasAdicionadas = Number(prompt('Quantas mercadorias ? '))
        // atualizacaoMercadorias = quantidadeMercadorias + mercadoriasAdicionadas 
        for (x = 1; x <= mercadoriasAdicionadas; x ++) {
            valorNovasMercadorias = Number(prompt('Digite o valor das novas mercadorias '))
        // console.log(`valor novas mercadorias linha 36 ${valorNovasMercadorias}`)
            valorAtualizado = valorAtualizado + valorNovasMercadorias }
        }else {
            console.log("Muito Obrigado, precisando é só entrar em contato")
        }

        let totalMercadorias = mercadoriasAdicionadas + quantidadeMercadorias

        let totaEmValores = valorTotal + valorAtualizado

        let mediaAtualizada = totaEmValores / totalMercadorias

        console.log(`valor total ${valorTotal} - valor atualizado ${valorAtualizado}`)

        console.log(`Agora ao total de mercadorias temos ${totalMercadorias} e a média de valores é ${mediaAtualizada}`)
