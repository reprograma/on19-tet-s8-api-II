const express = require("express")
const app = express()
const port = 3000
const listaDeProdutos = require("./model/produtos.json")

app.use(express.json())

app.get("/produto", (req, res) => {
    const filtroValor = req.query.valor
    const filtroId = req.query.id

    const produtoSelecionado = listaDeProdutos.filter((item) => {
        if(filtroValor) {
            return item.Title.toLowerCase() === filtroValor
        }
        if(filtroId) {
            return item.Year === filtroId
        }
        return item
    })
    res.json(produtoSelecionado)
})


app.get("/produtos/:id", (req, res) => {
    const id = req.params.id

    const produtoSelecionado = listaDeProdutos.filter((item) => item.id == id)

    res.json(produtoSelecionado)

})

app.post("/Produtos", (req, res) => {
    const body = req.body

    listaDeProdutos.push(body)

    res.json(listaDeProdutos)
})

app.listen(port, () => {
    console.log("Api está escutando na porta 3000")
})