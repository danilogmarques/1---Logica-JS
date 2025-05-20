// 5 - Escreva um algoritmo para ler um sálario mensal atual de um funcionário e o 
// percentual de reajuste. Calcular e escrever o valor do novo salário.

const prompt = require ('prompt-sync')()

let salario = prompt ('Qual é o seu salário ?')
console.log(salario)

const percentualReajuste = prompt ('Qual foi o percentual de reajuste ? ')
console.log(percentualReajuste)

let reajusteReal =  percentualReajuste * salario / 100
console.log(reajusteReal)

const novoSalario  = reajusteReal + salario ;
console.log(novoSalario)

console.log(`O seu novo salário vai ser de ${novoSalario} `)

