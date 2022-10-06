
const express = require("express")
const app = express()
const port = 3333
const produtos = require ("./model/produtos.json")

app.use(express.json())


app.get("/",(req, res)=>{
    res.send ("Hello World")
})
app.get("/produtos", (req, res) => {
    res.json(produtos)
    const filtroNome = req.query.nome
    const filtroAno = req.query.ano

    const produto = produto.filter((item, index) => {
        if(filtroNome) {
            return item.Title.toLowerCase() === filtroNome.toLowerCase()
        }
        if(filtroAno) {
            return item.Year === filtroAno
        }
        return item
    })
    res.json(produto)
})

app.get("/produtos/:id", (req, res) => {
    const id = req.params.id 

    const Produto = produtos.filter((item, index) => item.id == id)

    res.json(Produto)

})

app.post("/produtos", (req, res) => {
    const body = req.body
    console.log(body)

    res.send("usuario autenticado")

    produtos.push(body)

    res.json(produtos)
})

  

app.listen(port, ()=>{
    console.log("Api esta escutando na porta 3333")
})