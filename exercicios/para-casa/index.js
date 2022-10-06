const express = require("express")
const app = express()
const port = 3333
const listaProdutos = require("./model/produtos.json")

app.use(express.json())

app.get("/", (req, res) => {
    res.send("Hello World")
})

app.get("/produtos", (req, res) => {
    const filtroNome = req.query.nome
    const filtroDescricao = req.query.descricao

    const produtoSelecionado = listaProdutos.filter((item, index) => {
        if(filtroNome) {
            return item.nome === filtroNome
        }
        if(filtroDescricao) {
            return item.descricao === filtroDescricao
        }
    
    })
    res.json(listaProdutos)
})

app.get("/produtos/:id", (req, res) => {
    const id = req.params.id

    const produtoSelecionado = listaProdutos.filter((item, index) => item.id == id)
    res.json(produtoSelecionado)

})

app.post("/produtos", (req, res) => {
    const body = req.body

    listaProdutos.push(body)
    res.json(listaProdutos)

    res.send("usuário autenticado")
    console.log(body)
})

app.listen(port, () => {
    console.log("API esta escutando na porta 3333")
})












// HOST = localhost
// PORT = 3002
//https://localhost:3002
//Nodemon observa o arquivo
