// 8 - Ler um valor e escrever " O valor é maior que 10 ", caso o valor informado seja maior que 10,
// caso contrário informar "valor menor que 10"

const prompt = require ('prompt-sync')()

let valor = Number(prompt("Digite um número "))

if( valor >= 10 ){
    console.log(` O valor digitado é maior que 10`)
}else{
    console.log(` O valor digitado é menor que 10`)
}





