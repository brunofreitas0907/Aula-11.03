/*Crie uma função que receba um array de notas e retorne a média das notas . Se a média for maior ou igual a 7, retorne "Aprovado",
caso contrário, retorne "Reprovado".

---------------------------------------------------------------------------------------------*/

let notas = [100, 88, 66, 90, 50]; //notas aleatórias
let soma = 0; // irá armazenar a soma das notas

function mediaNotas(notas)
{
    // irá somar todas as notas
    notas.forEach(nota =>
    {
        soma = soma + nota
    })

    // irá calcular a média das notas
    media = soma / notas.length;

    // irá verificar se o aluno foi aprovado ou não
    if (media >= 7)
    {
        console.log('Aprovado!');
        return media
    }
    else
    {
        console.log('Reprovado');
        return media
    }
    
}

console.log(mediaNotas(notas));