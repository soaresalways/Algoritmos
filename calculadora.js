

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function somar(n1, n2) { return n1 + n2; }
function subtrair(n1, n2) { return n1 - n2; }
function multiplicar(n1, n2) { return n1 * n2; }
function dividir(n1, n2) { return n1 / n2;
    if (n2 === 0) return "Error: Divisão não pode ser feita por zero!!";
    return n1 / n2;
}

rl.question('Digite o primeiro número: ', (resp1) => {
    rl.question('Digite o segndo número: ', (resp2) => {
        
        const n1 = Number(resp1);
        const n2 = Number(resp2);

        console.log("\n<--- Resultado --->");
        console.log(`Soma: ${somar(n1, n2)}`);
        console.log(`Subtração: ${subtrair(n1, n2)}`);
        console.log(`Multiplicação: ${multiplicar(n1, n2)}`);
        console.log(`Divisão: ${dividir(n1, n2)}`);

        rl.close();                                                                                       //--> leitura de tud o
    });
});