// 26 - Ler 10 valores e escrever quantos desses valores lidos são negativos. 

const prompt = require ('prompt-sync')()

let valor = 0
let numero = 0
let positivo = 0
let negativo  = 0

for ( contador = 1; contador <=10 ; contador++ ){
    valor = Number(prompt('Digite um número '))
    
    if ( valor <= 0){

        negativo ++
        
    } else {

        positivo ++
    
    }
    } 

console.log(`${negativo} são negativos e ${positivo} são positivos`)