const express = require("express")
const app = express()
const port = 3000
const produtos = require("./model/produtos.json")
app.use(express.json())

app.get("/", (req, res) =>{
    res.send("Hello World")
})

app.get("/produtos", (req, res) => {
    res.json(produtos)
})

app.get("/produtos/:id", (req, res) => {
    const id = req.params.id
    const prodEscolhido = produtos.filter((item, index) => item.id == id)
    res.json(prodEscolhido)
})

app.get("/produtos", (req, res) => {
    const filtroNome = req.query.nome
    const filtroDescricao = req.query.descricao

    const prodEscolhido = produtos.filter((item, index) => {
        if(filtroNome) {
            return item.nome === filtroNome
        }
        if(filtroDescricao) {
            return item.descricao === filtroDescricao
        }
        return item
    })
    res.json(produtos)
})


app.post("/produtos", (req, res) => {
    const body = req.body
    produtos.push(body)
    console.log(body)
    res.json(produtos)
})

app.listen(port, () =>{
    console.log("Api está escutado na porta 3000")
})