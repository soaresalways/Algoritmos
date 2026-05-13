/*
Classificação de Idades
Objetivo:
Criar um algoritmo que receba um array de pessoas e suas idades,
separando-as em maiores de idade (>=18) e menores de idade (<18).
Calcular também a média das idades de cada grupo.
Instruções:
	- Declare um array com nomes de pessoas e outro com suas idades.
	- Percorra os arrays com um laço for ou forEach e verifique a idade de cada pessoa.
	- Separe em dias arrays distintos e calcule a soma das idades de cada grupo.
	- De cada grupo, exiba os nomes das pessoas, o total de pessoas e a média de idade.
*/

//const pessoas = ["Lorenzo", "JP Cordeio", "Enzo", "Lazaro", " Luis Ribeiro", "Andre Scavassa", "Felipe"]
//const idades = [67, 67, 67, 67, 15, 13, 67]




// Arrays fornecidos
const pessoas = ["Lorenzo", "JP Cordeiro", "Enzo", "Lazaro", "Luis Ribeiro", "Andre Scavassa", "Felipe"];
const idades = [67, 67, 67, 67, 15, 13, 67];

// Arrays para separar maiors e menores de idade.
const maioresDeIdade = [];                   // Array vazio para maiores (>18)
const menoresDeIdade = [];                   // Array vazio para menores (<18)
let somaMaiores = 0;                         // Soma das idades dos maiores
let somaMenores = 0;                         // Soma das idades dos menores

// Array com forEach
pessoas.forEach((pessoa, index) => {
    const idade = idades[index];
    
    if (idade >= 18) {
        maioresDeIdade.push(pessoa);        // Adiciona pessoas ao array (maiores)
        somaMaiores += idade;               // Soma a idade
    } else {
        menoresDeIdade.push(pessoa);        // Adiciona pessoas ao array (menores de idade)
        somaMenores += idade;               // Soma a idade
    }
});

// Médias.
const mediaMaiores = somaMaiores / maioresDeIdade.length;
const mediaMenores =  somaMenores / menoresDeIdade.length;

// Resultados.
console.log(" Classificação de idades \n");

console.log("Maiores de idades (>= 18 anos):");
console.log("- Pessoas:", maioresDeIdade);
console.log("- Total de pessoas:", maioresDeIdade.length);
console.log("- Soma das idades:", somaMaiores);
console.log("- Média de idade:", mediaMaiores.toFixed(2), "anos\n");

console.log("Menors de idade (< 18 anos):");
console.log("- Pessoas:", menoresDeIdade);
console.log("- Total de pessoas:", menoresDeIdade.length);
console.log("- Soma idades:", somaMenores);
console.log("- Média de idade:", mediaMenores.toFixed(2), "anos\n");

console.log("Resultado Final");
console.log(`Total de maiores de idade: ${maioresDeIdade.length}`);
console.log(`Total de menores de idade: ${menoresDeIdade.length}`);
console.log(`Total geral: ${pessoas.length} pessoas`);

