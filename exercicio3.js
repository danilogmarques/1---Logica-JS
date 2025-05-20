// 3 - Escreva um algoritmo que leia a idade de uma pessoa expressa em anos, meses e dias
// e escreva a idade dessa pessoa expressa em dias 
// considerar ano 365 dias 

const prompt = require('prompt-sync')();

const idade = prompt('Quantos anos você tem ? ');

diasMes = 30
diasAno = 365 
mesesAno = 12

idadeEmMeses = idade*mesesAno  

idadeEmDias = idadeEmMeses*diasMes

console.log(`Você tem ${idade} anos ${idadeEmMeses} meses e ${idadeEmDias} dias`)