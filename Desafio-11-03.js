/* DESAFIO - Você deverá criar uma série de funções para manipular um array que representa uma
compra de supermercado (apenas preços dos produtos). As funções irão adicionar, remover e
calcular o valor da compra */

var precosProdutos = [5.68, 10.98, 50.30, 9.80, 8.60];
var soma = 0;
valorAleatório = Math.random().toFixed(2);

// irá adicionar um valor aleatório ao vetor
function adicionarValor()
{
    precosProdutos.push(valorAleatório)
    return precosProdutos;
}

// irá remover o último valor do vetor
function removerValor()
{
    precosProdutos.pop(precosProdutos.length)
    return precosProdutos;
}

// função para somar o valor total da compra
function calcularCompra()
{
    precosProdutos.forEach(num =>
    {
        soma += num
    })

    return soma.toFixed(2)
}

// irá mostrar na tela a soma total dos produtos
console.log('A soma dos produtos é ' + calcularCompra());

// irá mostrar na tela todos os valores do vetor ao adicionar um número aleatório a ele
console.log('Os números com o aleatório adicionado são: ' + adicionarValor());

// irá remover o último valor do vetor
console.log('Os números com o último removido são:' + removerValor());