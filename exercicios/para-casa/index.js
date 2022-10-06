const express = require("express")
const app = express()
const port = 3000

const produtos = require("./model/produtos.json")

app.use(express.json())

app.get("/produtos/:id", (req, res) => {
    const id = req.params.id // Retorna uma string

    const produtoEscolhido = produtos.filter((item) => item.id == id)

    res.json(produtoEscolhido)

})

app.get("/produtos", (req, res) => {

    const nome = req.query.nome
    const descricao = req.query.descricao
    const produtoFiltro = produtos.filter((item) => {

        if (nome) {
            return item.nome.toLowerCase() === nome.toLowerCase()
        }

        if (descricao) {
            return item.descricao.toLowerCase() === descricao.toLowerCase()
        }
        return item
    })
    res.json(produtoFiltro)
})

app.post("/produtos", (req, res) => {
    const body = req.body
    produtos.push(body)
    res.json(produtos)

})


app.listen(port, () => {
    console.log(`Escutando na porta ${port}`)
})