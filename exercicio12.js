// 12 - Faça um algoritmo para ler o número da conta do cliente, saldo, débito, e credito.
// Após Calcular e escrever o saldo atual. Também testar se o saldo atual for maior ou igual a zero e escrever
// a mensagem saldo positivo, ou negativo.

const prompt = require ('prompt-sync') ()

numeroConta = prompt ( 'Digite o número da sua conta ')
saldo = prompt (' digite seu saldo atual ')
saldo = Number (saldo)

debito = prompt ( ' digite o valor das suas despesas do mês ')
debito = Number(debito)

credito = prompt ( 'digite o valor recebido durante o mês ')
credito = Number(credito)

saldoAtual = ( saldo + debito ) - credito 

console.log(`esse é o seu saldo atual ${saldoAtual}`)









