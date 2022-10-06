const express = require("express")
const app = express()
const port = 3333
const listaDeProdutos= require("./model/produtos.json")

app.use(express.json())

app.get("/produtos", (req, res) => {
    res.json(listaDeProdutos)
})


app.get("/produtos/:id", (req, res) => {
    const id = req.params.id

    const produtoEscolhido = listaDeProdutos.filter((item, index) => item.id == id)

    res.json(produtoEscolhido)

})

app.post("/produtos", (req, res) => {
    const body = req.body

    listaDeProdutos.push(body)

    res.json(listaDeProdutos)
})


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
    console.log("Api está funcionando na porta 3333")
})