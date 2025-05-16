// 2 - Escreva um algoritmo para ler as dimensões de um retângulo (base e altura) 
// e calcule a sua área 

const prompt = require('prompt-sync')();

const base = prompt('digite um número para a base do retângulo ')
const altura = prompt('digite um número para a altura do triângulo ')

const area = base*altura

console.log(` A base do retângulo digitada foi ${base} e a altura digitada foi ${altura}, d
    dessa forma a área do retângulo é ${area}`);