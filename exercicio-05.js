/*Escreva um afunção que receba um array de números e retorne o menor número presente no array

----------------------------------------------------------------------------------------------*/

var numeros = [2, 10, 20, 30, 40, 50, -1, -23]; // variáveis com números aleatórios
menorNumero = 10000000; // irá armazenar o menor número

// irá encontrar o menor número
function menorNum (numeros)
{
    // irá verificar entre todas as casas do vetor qual é o menor número    
    numeros.forEach(num =>
    {
        if(num < menorNumero)
        {
            menorNumero = num
        }
    })

    return menorNumero;
}

// irá mostrar o menor número ao usuário na tela
console.log('O menor número é o ' + menorNum(numeros) + '!');
