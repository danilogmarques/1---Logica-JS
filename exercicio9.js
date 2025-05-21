// 9 - Ler um valor e escrever se o mesmo é positivo e negativo.

const prompt = require ('prompt-sync')();

let valor = prompt ( 'Digite um valor ' );
    valor = Number (valor)

if( valor >= 0 ){
    console.log(' O valor digitado é positivo ')
}else {
    console.log(' O valor digitado é negativo ')
}