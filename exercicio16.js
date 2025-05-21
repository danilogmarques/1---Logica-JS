// 16 - Ler 3 Valores ( A, B e C ) cada um representando a medida de um triângulo, e escrever 
// se formam ou não um triângulo. OBS: para formar um triângulo, o valor de cada lado deve ser menor 
// que a soma dos outros 2 lados 

const prompt = require('prompt-sync')()

let valorA = Number(prompt('digite um valor ' ))


let valorB = Number(prompt('digite um valor ' ))


let valorC = Number(prompt('digite um valor ' ))


// const somaA = valorB + valorC

// const somaB = valorA + valorC

// const somaC = valorA + valorB 

if ( valorA <= valorB + valorC )
    if ( valorB <=  valorA + valorC )
        if ( valorC <= valorA + valorB ){
            console.log('O triângulo foi formado')
} else {
    console.log('O triângulo não foi formado')
}