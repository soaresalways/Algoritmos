// Cálculo de desconto
// Objetivo:
// Desenvolver um programa que calcule o valor final de um produto após a aplicação de um desconto
// Intruções:
//  --> Informe o valor original do produto.
// --> informe o percentual de desconto a ser aplicado.
// --> Calcule o valor do desconto e subtraia do valor original.
// --> Exiba o valor final com o desconto aplicado.
// Restrições: 
// --> O percentual de desconto deve estar entre 0 e 100.
// O valor final deve ser exibido com duas casas decimais.  


const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function pergunta(texto) {
    return new Promise((resolve) => rl.question(texto, resolve));
}

async function programaDesconto() {
    try {
        // Informar o valor original do produto
        let valorOriginal;
        do {
            valorOriginal = parseFloat(await pergunta("Digite o valor original do produto (R$): "));
            if (isNaN(valorOriginal) || valorOriginal <= 0) {
                console.log(" Digite um valor válido maior que 0!\n");
            }
        } while (isNaN(valorOriginal) || valorOriginal <= 0);
        
        // 2. Informar o percentual de desconto
        let percentualDesconto;
        do {
            percentualDesconto = parseFloat(await pergunta("Digite o percentual de desconto (0 a 100): "));
            if (isNaN(percentualDesconto) || percentualDesconto < 0 || percentualDesconto > 100) {
                console.log(" Err: O percentual de desconto deve estar entre 0 e 100!\n");
            }
        } while (isNaN(percentualDesconto) || percentualDesconto < 0 || percentualDesconto > 100);
        
        // 3. Cálculo do valor do desconto
        const valorDesconto = (valorOriginal * percentualDesconto) / 100;
        
        // 4. Cálculo do valor final
        const valorFinal = valorOriginal - valorDesconto;
        
        // 5. Resultado
        console.log("\n         DESCONTO");
        console.log("</> ━━━━━━━━━━━━━━━━━━━━━ </>");
        console.log(`Valor original: R$ ${valorOriginal.toFixed(2)}`);
        console.log(`Desconto: ${percentualDesconto}% = R$ ${valorDesconto.toFixed(2)}`);
        console.log("</> ━━━━━━━━━━━━━━━━━━━━━ </>");
        console.log(`VALOR FINAL: R$ ${valorFinal.toFixed(2)}`);
        console.log("</> ━━━━━━━━━━━━━━━━━━━━━ </>\n");
        
    } catch (error) {
        console.log("Erro:", error.message);
    } finally {
        rl.close();
    }
}

programaDesconto();