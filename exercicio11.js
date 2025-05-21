// 11 - Ler a primeira nota e segunda nota de um aluno e calcular a média e dizer se ele foi aprovado ou reprovado.
// Considera - se aprovado acima de 7.0

const prompt = require ('prompt-sync')();

let primeiraNota = Number(prompt ('Digite a sua primeira nota '))

let segundaNota = Number(prompt ('Digite a sua segunda nota '));

const media = ( primeiraNota + segundaNota ) / 2

console.log(media)

if ( media >= 7 ){
    console.log(` O aluno foi aprovado sua média foi ${media}`)
} else {
        console.log(` O aluno foi reprovado sua média foi ${media}` )
    }
