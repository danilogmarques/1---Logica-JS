// 6 - Uma revendedora de carros usados paga a seus funcuonários um sálario fixo por mês, mais uma comissao fixa 
// por carro vendido e mais 5% sobre o total de vendas efetuadas. Escreva um algoritmo que leia o numero de carros vendidos
// o valor total de vendas, o valor que ele recebe por cada carro e o salário fixo e calcule o sálario do mesmo.

const prompt = require ('prompt-sync')()

const carrosVendidos = prompt ('Quantos carros foram vendidos ? ')

const valorVendas = prompt ('Qual foi o valor das vendas ? ')

const totalVendas = 5 * valorVendas/100 

const sálarioFuncionario = prompt ('Qual o seu salário fixo por mês ? ')

const comissaoPorCarro = prompt ('Qual a sua comissão por carro vendido ? ')

const resultadoComissaoPorCarro = comissaoPorCarro * carrosVendidos

const salarioTotal = resultadoComissaoPorCarro + totalVendas + sálarioFuncionario 

console.log(salarioTotal)


