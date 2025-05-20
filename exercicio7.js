// 7 - Faça um algoritmo que leia três notas de um aluno, calcule e escreva a média final deste aluno 
// considere que a média é ponderada e que o peso das notas é 2, 3, e 5. Fórmula para o calculo:
// media final = N1 * 2 + n2 * 3 + n3 * 5 / 10

const prompt = require ('prompt-sync')()

nota1 = prompt ('digite a primeira nota ')

nota2 = prompt ('digite a segunda nota ')

nota3 = prompt ('digite a terceira nota ')

mediaFinal = (( nota1 * 2 ) + ( nota2 * 3 ) + ( nota3 * 5 )) / 10

console.log(`A sua média final é ${mediaFinal}`)