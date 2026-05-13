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

// Dados
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

