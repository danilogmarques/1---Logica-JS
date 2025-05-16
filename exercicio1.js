// 1 - Escreva um algoritmo para ler um valor ( Do Teclado) e escrever na tela o seu antecessor 

const prompt = require('prompt-sync')();

const numero = prompt('Digite um número? ');

const antecessor = numero - 1

console.log(`O número digita foi ${numero} e o seu antecessor é ${antecessor}`)


