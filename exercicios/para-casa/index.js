const express = require("express")
const app = express()
const port = 3000
const listaDeProdutos = require("./model/produtos.json")

app.use(express.json())

app.get("/", (req , res) => {
    res.send("Olá!")
})

// Filtro id:
app.get("/produtos/:id", (req, res) => {
    const id = req.params.id 

    const prodEscolhido = listaDeProdutos.filter((item) =>  item.id == id)

    res.json(prodEscolhido) 
})

// Filtro nome e valor:
app.get("/produtos", (req, res) => {
    const filtroNome = req.query.nome
    const filtroValor = req.query.valor

    const prodFiltrado = listaDeProdutos.filter((i) => {
        if(filtroNome) {
            return i.nome.toLowerCase() === filtroNome.toLowerCase()
        } if (filtroValor) {
            return i.valor == filtroValor
        }
        return i
    })
    res.json(prodFiltrado) // retorna Json
})

// POST

app.post("/adicionarProduto", (req, res) => {
    const body = req.body
    listaDeProdutos.push(body)
    res.json(listaDeProdutos)

})



app.listen(port, () => {
    console.log("Api está escutando na porta 3000")
})