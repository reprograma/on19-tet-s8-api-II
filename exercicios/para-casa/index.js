const express = require("express")
const app = express()
const port = 3000
const listaDeProdutos = require("./model/produtos.json")

app.use(express.json()) 

// expõe uma rota GET que recebe o ID de um produto e retorna apenas esse produto da listaDeProdutos
app.get("/produtos/:id", (req, res) => {
    const id = req.params.id
    const idBuscado = listaDeProdutos.filter((item, index) => item.id == id)
        res.json(idBuscado)
  })

// cria filtros por nome e valor
app.get("/produtos", (req, res) => {
    const filtroNome = req.query.nome 
    const filtroValor = Number(req.query.valor)
    const produtoBuscado = listaDeProdutos.filter((item, index) => {
    if (filtroNome) {
        return item.nome.toLowerCase() === filtroNome.toLocaleLowerCase()
    }   
    if (filtroValor) {
        return item.valor === filtroValor
    }
    return item
    })
    res.json(produtoBuscado)
  })

// Adiciona um novo item à listaDeProdutos e retorna a lista atualizada
app.post("/produtos", (req, res) => {
    const body = req.body
    listaDeProdutos.push(body)
    res.json(listaDeProdutos)
})

// cria uma rota GET para listar todos os produtos da listaDeProdutos
app.get("/produtos", (req, res) => {
    res.json(listaDeProdutos)
  })

// escuta a porta 3000 por conexões
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`)
})