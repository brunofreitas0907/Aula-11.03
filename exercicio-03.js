/* Dado um array de números, escreva uma função que calcule a soma de todos os elementos do array e retorne o resultado.

---------------------------------------------------------------------------------------------*/

var numeros = [10, 20, 30, 40, 50]; // declaração de números aleatórios
var soma = 0; // irá armazenar a soma de todos os elementos

// irá somar os números
function somaNumeros(numeros)
{
    numeros.forEach(num =>
    {
        soma += num
    })

    return soma 
}

// irá mostrar na tela o resultado final
console.log('A soma de todos os elementos é: ' + somaNumeros(numeros));