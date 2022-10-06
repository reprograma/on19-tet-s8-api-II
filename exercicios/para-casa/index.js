const express = require("express")

const app = express()
const port = 3000
const produtos = require("./model/produtos.json")

app.use(express.json())

app.get("/produtos", (req, res) => {
    const filtroNome = req.query.nome
    const filtroValor = req.query.valor

    const produtoEscolhido = produtos.filter((item) => {
        if (filtroNome) {
            return item.nome.includes(filtroNome)
        }
        if (filtroValor) {
            return item.valor <= filtroValor //Utilizei igual ou menor por imaginar um usuário procurando por produtos menor que um valor desejado
        }
        return item
})
    res.json(produtoEscolhido)
})

app.get("/produtos/:id", (req, res) => {
    const id = req.params.id

    const produtoEscolhido = produtos.filter((item) => item.id == id)
    res.json(produtoEscolhido)
})

app.post("/produtos", (req, res) => {
    const body = req.body

    produtos.push(body)
    
    res.json(produtos)
    console.log(body);
})

app.listen(port, () => {
    console.log("API está ouvindo a porta 3000.");
})