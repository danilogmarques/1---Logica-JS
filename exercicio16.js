// 16 - Ler 3 Valores ( A, B e C ) cada um representando a medida de um triângulo, e escrever 
// se formam ou não um triângulo. OBS: para formar um triângulo, o valor de cada lado deve ser menor 
// que a soma dos outros 2 lados 

const prompt = require('prompt-sync')()

let valorA = prompt('digite um valor ')
Number(valorA)

let valorB = prompt('digite um valor ')
Number(valorB)

let valorC = prompt('digite um valor ')
Number(valorC)

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