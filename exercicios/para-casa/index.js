const { response } = require("express")

const express = require("express") // nessa constante pega tudo que está dentro do Express com require
const app = express()      // Aqui const app é o express
const port = 3000          // Aqui define a porta com a numeração 3000 
const listaDeProdutos = require("./model/produtos.json") // Aqui está buscando a lista de produtos para dentro do meu arquivo.

app.use(express.json()) // aqui é um interceptor no express que pega o bady e as respostas das requisões enviadas para o servidor para ser lidas em Json


app.get("/produtos",(req, res)=>{ // Aqui filtros
    const filtroNome = req.query.nome?.toLocaleLowerCase()
    const filtroValor = req.query.valor
    
    const produtoEscolhido = listaDeProdutos.filter((item) => {
        if(filtroNome) {
            return item.nome.toLowerCase() === filtroNome.toLocaleLowerCase()
        }
        if(filtroValor){
            return item.valor === filtroValor // Mexer aqui neste filtro
        }
        return item
    })
    res.json(listaDeProdutos)
})

app.get("/produtos/:id", (req, res) => { // rota de ID
    const id = req.params.id

    const produtoEscolhido = listaDeProdutos.filter((item) => item.id == id)
    
    res.json(produtoEscolhido)
})


app.post("/produtos",(req, res)=>{ // incluir mais produto no body em um objeto
    const body = req.body
    
    listaDeProdutos.push(body)

    res.send(listaDeProdutos)
})

app.listen(port,()=>{    // Aqui listen recebe dois parametros, a porta e uma callback para subir o servidor. 
    console.log("Api está escutando na porta 3000");
})