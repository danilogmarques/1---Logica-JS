// 12 - Faça um algoritmo para ler o número da conta do cliente, saldo, débito, e credito.
// Após Calcular e escrever o saldo atual. Também testar se o saldo atual for maior ou igual a zero e escrever
// a mensagem saldo positivo, ou negativo.

const prompt = require ('prompt-sync') ()

numeroConta = Number(prompt ( 'Digite o número da sua conta '))

saldo = Number(prompt (' digite seu saldo atual '))

debito = Number(prompt ( ' digite o valor das suas despesas do mês '))

credito = Number(prompt ( 'digite o valor recebido durante o mês '))

saldoAtual = ( saldo + credito ) - debito

if (saldoAtual >= 0){
    console.log(`O seu saldo é de ${saldoAtual} e é positivo`)
} else {
    console.log(`Seu saldo é de ${saldoAtual} e seu nome vai para o serasa, saldo negativo`)
}









