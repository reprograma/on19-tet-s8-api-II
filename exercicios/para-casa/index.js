const express = require("express")
const app = express()
const port = 3000
const produtos = require("./model/produtos.json")
app.use(express.json())


//- [x] criar uma rota GET que lista TODOS os produtos da lista de produtos.
app.get("/produtos", (req, res) =>{
    res.send(produtos)
})

//- [x] expor uma rota GET que recebe o ID de um produto e retorna apenas esse produto na lista de produtos
app.get("/produtos/:id", (req, res) => {
    const id = req.params.id
    
    const prodEscolhido = produtos.filter((item, index) => item.id == id)
    res.json(prodEscolhido)
})

//[x] Utilizar o recurso `req.query` para criar filtros ( ex.: buscar por nome do produto, valor... ) - * Os filtros ficam a seu critério mas espero que exista ao menos dois filtros para sua rota * 
app.get("/produtos", (req, res) => {
    const filtroNome = req.query.nome
    const filtroDescricao = req.query.descricao

    const prodEscolhido = produtos.filter((item, index) => {
        if(filtroNome) {
            return item.nome.toLowerCase() == filtroNome.toLowerCase()
        }
        if(filtroDescricao) {
            return item.descricao == filtroDescricao
        }
        return item
    })
    res.json(prodEscolhido)
})


//[ ] Adicionar um novo item à lista de produtos e retorna a lista atualizada
app.post("/produtos", (req, res) => {
    const body = req.body
    produtos.push(body)
    res.json(produtos)
})

app.listen(port, () =>{
    console.log("Api está escutado na porta 3000")
})