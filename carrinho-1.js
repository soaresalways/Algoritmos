// Cálculo de pedido com cupom de desconto
// Objetivo:
// Desenvolver uma função que calcule o valor final de um pedido
// aplicando um cupom de desconto percentual e exiba um resumo formatado.
// Instruções:
//   • Crie uma função chamada "calcularPedido" que receba três parâmetros:
//     valorPedido, percentualCupom e valorFrete.
//   • Valide se o percentual do cupom está entre 0 e 100.
//   • Caso seja inválido, exiba uma mensagem de erro e encerre a função.
//   • Calcule o valor do desconto multiplicando o valor do pedido
//     pelo percentual dividido por 100.
//   • Calcule o valor final subtraindo o desconto do valor do pedido.
//   • Retorne um objeto contendo as propriedades "valorFinal" e "desconto".
//   • Utilize desestruturação para capturar os valores retornados.
//   • Exiba no console o resumo do pedido com valor original,
//     desconto aplicado e valor final.
// Restrições:
//   • O percentual de desconto deve estar entre 0 e 100 (inclusive).
//   • Se o percentual for inválido, exibir: "Erro: o percentual do cupom deve estar entre 0 e 100."
//   • Todos os valores monetários devem ser exibidos com duas casas decimais.
//   • Utilize template strings para formatar as mensagens de saída.
//   • O resumo deve seguir exatamente o formato:
//       === Resumo do Pedido ===
//       Valor original:  R$ 450.89
//       Cupom (15%):    - R$ 67.63
//       Valor final:     R$ 383.26



const readline = require('readline');

// função para calcular o pedido
function calcularPedido(valorPedido, percentualCupom, valorFrete) {
    if (percentualCupom < 0 || percentualCupom > 100) {
        console.log("Negado. O percentual do cupom deve estar entre 0 e 100.");
        return null;
    }
    
    const desconto = (valorPedido * percentualCupom) / 100;
    const valorFinal = valorPedido - desconto;
    
    return {
        valorFinal: valorFinal.toFixed(2),
        desconto: desconto.toFixed(2)
    };
}

// entrada de dados node.js
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function perguntarValorPedido() {
    rl.question("Qual o valor do produto (R$): ", (valor) => {
        const valorPedido = parseFloat(valor) || 0;
        perguntarPercentual(valorPedido);
    });
}

function perguntarPercentual(valorPedido) {
    rl.question("Qual o percentual de desconto (%): ", (percentual) => {
        const percentualCupom = parseFloat(percentual) || 0;
        perguntarFrete(valorPedido, percentualCupom);
    });
}

function perguntarFrete(valorPedido, percentualCupom) {
    rl.question("Qual o valor do frete (R$): ", (frete) => {
        const valorFrete = parseFloat(frete) || 0;
        
        // Calcula e exibe resultado no console sobre a conta 
        const resultado = calcularPedido(valorPedido, percentualCupom, valorFrete);
        
        if (resultado) {
            const { valorFinal, desconto } = resultado;
            
            console.log("\n=== Resumo do Pedido ===");
            console.log(`Valor original:  R$ ${parseFloat(valorPedido).toFixed(2)}`);
            console.log(`Cupom (${percentualCupom}%):    - R$ ${desconto}`);
            console.log(`Valor final:     R$ ${valorFinal}`);
        }
        
        rl.close();
    });
}

// inicia o programa
console.log("=== Calculadora de Pedido com Cupom ===");
perguntarValorPedido();