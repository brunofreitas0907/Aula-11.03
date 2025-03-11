/* Crie uma função que receba uma string e retorne um array com as vogais (a, e, i, o, u)
presentes nela.. Por exemplo,  para a string "Olá mundo", o resultado deve ser [o, a, u, o].
Utilize o método .toLowerCase() para deixá-las minúsculas.

---------------------------------------------------------------------------------------------*/

var string = "Acaba logo"; // string aleatória
var vogais = []; // irá armazenar as vogais extraidas
const regex = /[aeiou]/gi; // responsável pela extração das vogais

// irá extrair as vogais das palavras do vetor
function extrairVogais(string)
{
    let caracteres = string.toLowerCase().split('');

    // irá repetir até que extraia as vogais de todas as casas do vetor
    caracteres.forEach(caracter =>
    {
        if (caracter.match(regex))
        {
           vogais.push(caracter);
        }
    })

    return vogais;
}


//irá exibir as vogais extraidas na tela
console.log('Extraimos das palavras: ' + string + '\n\n As vogais: ' + extrairVogais(string));
