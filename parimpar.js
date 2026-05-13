const readline = require("readline")
const rl = readline.createInterface(
    {
        input: process.stdin,
        output: process.stdout
    }
)
 
perguntar()
 
function perguntar() {
    rl.question("informe um número: ", (entrada) => {
        const num = Number(entrada)
 
        if (!isNaN(num) && entrada.trim() !== "") {
 
            if (num % 2 == 0) {
                console.log("Este número é par.")
                perguntar()
            } else {
                console.log("Este número é ímpar.")
                perguntar() }
        } else {
            console.log("Erro! Digite um número válido!")
            perguntar()
        }
    })
}
