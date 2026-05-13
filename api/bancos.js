process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0"

async function listarBancos() {

    try {
        const resposta = await fetch("https://brasilapi.com.br/api/banks/v1")

        if (!resposta.ok) {
            throw new Error("Deu erro ao consultar a API")
        }
        // resposta é sabor objeto
        // listaDeBancos é um objeto
        // .json() faz esta conversão
        const listaDeBancos = await resposta.json()

        // Chamar a função para criar o arquivo .md
        gerarMarkdown(listaDeBancos)

        //console.log("Lista de bancos no Brasil:")
        //listaDeBancos.forEach((objBanco) => {
        //    console.log(`Cod: ${objBanco.code} | Nome: ${objBanco.fullName}`)
        //})
    }catch(erro){
        console.error(erro.message)
    }
}

//importar o sistema de arquivos (file system) do node.js (nativo)
const fs = require("fs")             // aqui vc pode usar "promises" caso não use "writeFileSync" ao contrario de "writeFile" na linha 46

function gerarMarkdown(listaDeBancos){
    try{

        //cabeçalho do markdown
        let markdown = "# Lista de Bancos do Brasil\n\n"
    
        //tabela com os dados dos bancos
        markdown += "| Código | Nome |\n"
        markdown += "|---|---|\n"
    
        listaDeBancos.forEach((objBanco) => {
            markdown += `| ${objBanco.code || "-"} | ${objBanco.name} |\n`
        })

        // Gravar o arquivo em disco
        fs.writeFileSync("bancos1.md" , markdown, "utf-8")
        console.log("Arquivo bancos.md gerado com sucesso")
        


    }catch (erro){
        console.error(erro.message)
    }
}

listarBancos()      // chamar a função



