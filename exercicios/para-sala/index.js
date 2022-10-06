/*const express = require("express")
const app = express()
const port = 3000
const listaDeFilmes = require("./model/filmes-lista.json")

app.use(express.json())

app.get("/", (req, res) => {
    res.send("Hello World")
})


// == igual |||  "1" == 1
// === identico 
app.get("/filmes", (req, res) => {
    const filtroNome = req.query.nome
    const filtroAno = req.query.ano

    const filmeEscolhido = listaDeFilmes.filter((item, index) => {
        if(filtroNome) {
            return item.Title.toLowerCase() === filtroNome.toLocaleLowerCase()
        }
        if(filtroAno) {
            return item.Year === filtroAno
        }
        return item
    })
    res.json(filmeEscolhido)
})

app.get("/filmes/:id", (req, res) => {
    const id = req.params.id // Retorna uma string

    const filmeEscolhido = listaDeFilmes.filter((item, index) => item.id == id)

    res.json(filmeEscolhido)

})

app.post("/filmes", (req, res) => {
    const body = req.body

    listaDeFilmes.push(body)

    res.json(listaDeFilmes)
})

app.listen(port, () => {
    console.log("Api está escutando na porta 3000")
})*/









const express = require("express")
const app = express() // o express agora é uma função
const port = 3000  // é uma porta de serviço 
const listaDeFilmes = require ("./model/filmes-lista.json")

app.use(express.json())

app.get("/", (req, res)=>{
    res.send("Hello, Worlld!")
})

// Host = localhost
//Port = 3000

// http:/HOST:PORT
// http:/localhost:3000

app.get("/filmes", (req, res)=>{
    res.json(listaDeFilmes)
})

app.get("/filmes/:id", (req, res)=>{
    const id = req.params.id
    const filmeEscolhido = listaDeFilmes.filter((item, index)=>{
item.id == id})
res.json (filmeEscolhido)
})

app.post("/", (req, res)=>{
    const body = req.body
    console.log(body)
    res.send("usuario autenticado")
})

app.listen(port, ()=>{
    console.log(`Api está rodando na porta ${port}`)
})

