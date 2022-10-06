//segunda parte sábados
const express = require("express")
const app = express()
const port = 3000
const listaDeFilmes = require("./model/filmes-lista.json")

app.use(express.json())

app.get("/", (req, res) => {
    res.send("Hello World")
})

app.get("/filmes", (req, res) => {
    const filtroNome = req.query.nome
    const filtroAno = req.query.ano

    const filmeEscolhido = listaDeFilmes.filter((item, index) => {
        if(filtroNome) {
            return item.Title.toLowerCase() === filtroNome
        }
        if(filtroAno) {
            return item.Year === filtroAno
        }
        return item
    })
    res.json(filmeEscolhido)
})
app.get("/filmes/:id", (req, res) => {
    const id = req.params.id

    const filmeEscolhido = listaDeFilmes.filter((item, index) => item.id == id)

    res.json(filmeEscolhido)

})

app.post("/", (req, res) => {
    const body = req.body

    console.log(body)

    res.send("usuário autenticado")
})

app.listen(port, () => {
    console.log("Api está escutando na porta 3000")
})