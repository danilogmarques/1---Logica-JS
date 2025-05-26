// 34 - Imagine que exista um comando chamado "posiciona (x,y)" em alguma linguagem de programação 
// Onde o x representaria a coluna que algo deve ser impresso na tela, e y a linha que algo deve ser
// impresso na tela. Desta forma, o algoritmo abaixo
// Inicio 
//        posiciona (10,2)
//        escrever 'olá'
//Fim 
// Baseado nesta situação escreva um algoritmo, utilizando este comando "posiciona" citado, que desenhe na tela 
// um retângulo de 60 colunas ( a partir da coluna 1 da tela ) e 10 linhas (a partir da linha um da tela );

// const caracter = "+"

// console.log(caracter)

let contador  = 1
let y ='+'
let x ='                                                        +'
let extremidades ='++++++++++++++++++++++++++++++++++++++++++++++++++++++++++'
while (contador <=1 ){
    contador ++
    console.log(extremidades);
}
while ( contador <= 9 ) {
    contador ++
    console.log(`${y}${x}`)

}
console.log(extremidades);
