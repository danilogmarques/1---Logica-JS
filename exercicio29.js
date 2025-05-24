// 29 - Ler o número de alunos existentes em uma turma e,
// após isto, ler as notas destes alunos, calcular e escrever a média aritemética dessas notas lidas.

const prompt = require ('prompt-sync')()

let qtdDeAlunos = Number(prompt('Quantos alunos tem na sua sala ? '))

let soma = 0

let notaAlunos = 0

for (contador = 1; contador <= qtdDeAlunos; contador ++) {


    notaAlunos = Number(prompt('Digite a sua nota '))

    soma = soma + notaAlunos

}

    const media = soma / qtdDeAlunos

    console.log(`São A média das notas de todos os alunos foi de ${media}`)
