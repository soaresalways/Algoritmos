process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0"

async function listarBancos(){

    const resposta = await fetch("https://brasilapi.com.br/api/banks/v1")
    
    if (!resposta.ok) {
        throw new Error ("Deu erro ao consultar a API")
    }

    // resposta ainda não é um objeto confirmado
    // listaDeBancos é um objeto, ele confirma
    // .json() faz essa conversão
    const listaDeBancos = await resposta.json()

    console.log("Lista de bancos do Brasil:")
    listaDeBancos.forEach((objBanco) => {
        console.log(`Cod: ${objBanco.code} | Nome: ${banco.name}`)
    })

    }cath(erro)
    console.error(erro.message)

    

listarBancos()              //chamar a função