const express = require("express")
const app = express()
const port = 3000
const produtos = require("./model/produtos.json")
app.use(express.json())

app.get("/", (req, res) =>{
    res.send("Hello World")
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
            return item.nome.toLowerCase() == filtroNome.toLowerCase()
        }
        if(filtroDescricao) {
            return item.descricao.t == filtroDescricao
        }
        return item
    })
    res.json(prodEscolhido)
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