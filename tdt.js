const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function calcularPedido(valorPedido, percentualCupom, valorFrete) {
    if (percentualCupom < 0 || percentualCupom > 100) {
        console.log("Erro: o percentual do cupom deve estar entre 0 e 100.");
        return null;
    }
    
    const desconto = (valorPedido * percentualCupom) / 100;
    const valorComDesconto = valorPedido - desconto;
    const valorFinal = valorComDesconto + valorFrete; 
    
    return {
        valorFinal: valorFinal.toFixed(2),
        desconto: desconto.toFixed(2),
        valorComDesconto: valorComDesconto.toFixed(2) 
    };
}

// 1. Valor do produto
rl.question("Valor do produto (R$): ", function(valorProduto) {
    const valorPedido = parseFloat(valorProduto);
    
    // 2. Cupom
    rl.question("Cupom %: ", function(cupom) {
        const percentualCupom = parseFloat(cupom);
        
        // 3. Fret
        rl.question("Frete (R$): ", function(frete) {
            const valorFrete = parseFloat (frete);
            
            // Calcula
            const resultado = calcularPedido(valorPedido, percentualCupom, valorFrete);
            
            if (resultado) {
                const { valorFinal, desconto, valorComDesconto } = resultado;
                
                console.log("  \n </> Resumo do Pedido </> ");
                console.log("Valor original: R$ " + parseFloat(valorPedido).toFixed(2));
                console.log("Cupom (" + percentualCupom + "%):   - R$ " + desconto);
                console.log("Subtotal:     R$ " + valorComDesconto);
                console.log("Frete:      + R$ " + parseFloat(valorFrete).toFixed(2));
                console.log("Valor final:  R$ " + valorFinal);
            }
            
            rl.close();
        })
    })
})