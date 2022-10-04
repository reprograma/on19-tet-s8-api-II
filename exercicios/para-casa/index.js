// Requisitos do exercício:

const express = require("express")
const app = express()
const port = 3000
const listaDeProdutos= require("./model/produtos.json")

app.use(express.json())

//- [ ] criar uma rota GET que lista TODOS os produtos da lista de produtos.
app.get("/produtos", (req, res) => {
    res.json(listaDeProdutos)
})

//- [ ] expor uma rota GET que recebe o ID de um produto e retorna apenas esse produto na lista de produtos
app.get("/produtos/:id", (req, res) => {
    const id = req.params.id

    const produtoEscolhido = listaDeProdutos.filter((item, index) => item.id == id)

    res.json(produtoEscolhido)

})

//- [ ] Adicionar um novo item à lista de produtos.
app.post("/produtos", (req, res) => {
    const body = req.body

    listaDeProdutos.push(body)

    res.json(listaDeProdutos)
})

//- [ ] Utilizar o recurso `req.params.query` para criar filtros ( ex.: buscar por nome do produto, valor... ) 
//- * Os filtros ficam a seu critério mas espero que exista ao menos dois filtros para sua rota

app.get("/produtos", (req, res) => {
    const filtroNome = req.query.nome
    const filtroValor = req.query.valor
    const filtroId = req.query.id

    const produtoEscolhido = listaDeProdutos.filter((item) => {
        if(filtroNome) {
            return item.nome.toLocaleLowerCase() === filtroNome.toLocaleLowerCase()
        }
        if(filtroValor) {
            return item.valor === filtroValor
        }
        if(filtroId) {
            return item.id === filtroId
        }
        return item
    })
    res.json(produtoEscolhido)
})


app.listen(port, () => {
    console.log("Api está executando na porta 3000 e esta tudo ok pra gloria do Senhor")
})
