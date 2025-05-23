// 27 - Ler 10 valores e escrever quantos desses valores lidos estão no intervalo [ 10, 20 ] 
// (incluindo os valores 10 e 20 no intervalo) e quantos deles estão fora deste intervalo 

const prompt = require ('prompt-sync')()

let valor = 0
let entreOsValores = 0
let foraDosValores = 0

for ( contador = 1; contador <= 10; contador ++) {
    valor = Number(prompt('Digite um número '))

    if (valor >= 10 && valor <= 20 ){

        entreOsValores ++

    } else {
        foraDosValores ++

    }
}

console.log(`são ${entreOsValores} que estão entre os valores de 10 à 20 e ${foraDosValores} estão fora desses valores`)