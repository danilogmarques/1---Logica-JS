//4 - Escreva um algoritmo para ler o número total de eleitrores de um municipio, o número de votos branos, nulos.
// Calcule e escreva o percentual que cada um representa em relação ao total de eleitores

const prompt = require('prompt-sync')();

let totalEleitores = prompt("Quantos eleitores tem na sua cidade ? ")

let votosBrancos = prompt("Qual a quantidade votos brancos ? ")

let votosNulos = prompt("Qual a quantidade de votos nulos ? ")

let votosValidos = totalEleitores - votosBrancos - votosNulos 

// console.log(`A quantida de votos válido é : ${votosValidos}`)

porcentagemVotosBrancos = ( votosBrancos / totalEleitores ) * 100

porcentagemVotosNulos = ( votosNulos / totalEleitores ) * 100

porcetagemVotosValidos = ( votosValidos / totalEleitores ) * 100

console.log(`A o total são ${totalEleitores} eleitores em sua cidade, desses eleitros ${votosBrancos}, ${porcentagemVotosBrancos} % 
    votaram em branco, ${votosNulos}, ${porcentagemVotosNulos} % votaram nulos, dessa forma ${votosValidos}, ${porcetagemVotosValidos} %, 
    foram os votos válidos  `)




