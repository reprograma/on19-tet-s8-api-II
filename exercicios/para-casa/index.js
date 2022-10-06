const express = require("express")
const app = express()
const port = 3000
const listaDeProdutos = require("./model/produtos.json")
app.use(express.json())

app.get("/" , (rec, res) => {
res.send("Hello World")
})

app.get("/produtos", (req, res) => {
    const filtroNome = req.query.nome
    const filtroValor = req.query.valor

    const produtoEscolhido = listaDeProdutos.filter((item, index) => {
        if(filtroNome) {
            return item.nome.toLowerCase() == filtroNome.toLowerCase()
        }
        if (filtroValor) {
            return item.valor == filtroValor
        }
        return item
        })
    res.json(produtoEscolhido)
})

app.get("/produtos/:id", (req, res) => {
const id = req.params.id
const produtoEscolhido = listaDeProdutos.filter((item, index) => item.id == id)

res.json(produtoEscolhido)

})


app.post("/produtos" , (req, res) => {
    const body = req.body

    listaDeProdutos.push(body)

    res.json(listaDeProdutos)

    })


app.listen(port, () => {
console.log("Api está escutando na porta 3000") //subir a api

})