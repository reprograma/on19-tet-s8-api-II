const express = require ("express")
const app = express()
const port = 3000
app.use(express.json())
app.listen(port, () => {
    console.log("API está escutando na porta 3000")
})

const listaDeProdutos = require("./model/produtos.json")

//[x] Utilizar o recurso `req.query` para criar filtros ( ex.: buscar por nome do produto, valor... ) - * Os filtros ficam a seu critério mas espero que exista ao menos dois filtros para sua rota * 

app.get("/produtos", (req, res) => {
    const filtroNome = req.query.nome //esse nome eu que defino como parâmetro na hora de pesquisar
    const filtroValor = req.query.valor // mesma coisa com o valor

    const produtoEscolhido = listaDeProdutos.filter((item, index) => {
        if(filtroNome){
            return item.nome.toLowerCase() === filtroNome.toLowerCase() //no item.nome, o .nome precisa ser igual está nossa lista de objetos
        }
        if (filtroValor){
            return item.valor == filtroValor //mesma coisa no .valor
        }
        return item 
    })
    res.json(produtoEscolhido)
})

//[x] criar uma rota GET que lista TODOS os produtos da lista de produtos.
app.get("/produtos", (req, res) =>{
    res.json(listaDeProdutos)
})

//[x] expor uma rota GET que recebe o ID de um produto e retorna apenas esse produto na lista de produtos
app.get("/produtos/:id", (req, res) =>{
    const id = req.params.id

    const produtoEscolhido = listaDeProdutos.filter((item, index) => item.id == id)

    res.json(produtoEscolhido)
})

//[x] Adicionar um novo item à lista de produtos e atualizar a lista com o novo produto.
app.post("/produtos", (req, res) => {
    const body = req.body

    listaDeProdutos.push(body)

    res.json(listaDeProdutos)
})

