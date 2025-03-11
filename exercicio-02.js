/*Crie um array com 10 números aleatórios. Escreva uma função que
conte quantos números são pares e quantos são ímpares e imprima o resultado.
Utilize % para identificar divisões com ou sem resto.

---------------------------------------------------------------------------------------------*/

var numeros = [10, 21, 30, 40, 50, 67, 70, 80, 93, 100]; // Declaração dos números aleatórios
var pares = []; // Irá armazenar os números pares
var impares = []; // Irá armazenar os númeoros ímpares

// Função que irá selecionar os números pares e os ímpares
function paresImpares(numeros)
{
    // Irá executar até percorrer todas as casas do vetor
    numeros.forEach(num =>
    {
        // irá verificar se o número é par ou ímpar
        if (num % 2 === 0)
        {
            pares.push(num)
        }
        else{
            impares.push(num)
        }
    })
}

// chama a função para exibir os resultados
paresImpares(numeros);

// Mostrará ao usuário quantos e quais números são pares e quais são ímpares
console.log('Dentre o número citados ' + pares.length + ' são pares e ' + impares.length + ' são ímpares!\n');
console.log('\n Sendo os pares: ' + pares + ' e ímpares: ' + impares);