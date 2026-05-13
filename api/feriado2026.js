process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0"
const fs = require("fs") // importe sempre fic no topo do comando (IA DEU ESSE DETALHE)

async function listarFeriados() {
    try {
        const resposta = await fetch("https://brasilapi.com.br/api/feriados/v1/2026")
        
        if (!resposta.ok) throw new Error("Erro ao consultar API")

        const listaDeFeriados = await resposta.json()

        console.log("Lista dos Feriados 2026 carregada!")
        
        // chamar a função markdown.
        gerarMarkdown(listaDeFeriados)

    } catch (erro) {
        console.error("Erro na requisição:", erro.message)
    }
}

function gerarMarkdown(listaDeFeriados) {
    try {
        let markdown = "# Lista de Feriados 2026\n\n"
        markdown += "| Data | Nome |\n"
        markdown += "|---|---|\n"

        listaDeFeriados.forEach((feriado) => {
            
            const dataFormatada = feriado.date || "-"
            markdown += `| ${dataFormatada} | ${feriado.name} |\n`
        })

        fs.writeFileSync("feriados2026.md", markdown, "utf-8")
        console.log("Arquivo feriados2026.md gerado com sucesso!")
    } catch (erro) {
        console.error("Erro ao gerar arquivo:", erro.message)
    }
}

// inicia o processo/chama a função.
listarFeriados()