const express = require("express")
const app = express()
const port = 3000
const listaDeFilmes = require("./model/filmes-lista.json")

app.use(express.json())

app.get("/", (req, res) => {
    res.send("Hello World")
})

<<<<<<< HEAD
=======

// == igual |||  "1" == 1
// === identico 
>>>>>>> 7b22de39645fa34c11d762e090e022c282ef170b
app.get("/filmes", (req, res) => {
    const filtroNome = req.query.nome
    const filtroAno = req.query.ano

    const filmeEscolhido = listaDeFilmes.filter((item, index) => {
        if(filtroNome) {
<<<<<<< HEAD
            return item.Title.toLowerCase() === filtroNome
=======
            return item.Title.toLowerCase() === filtroNome.toLocaleLowerCase()
>>>>>>> 7b22de39645fa34c11d762e090e022c282ef170b
        }
        if(filtroAno) {
            return item.Year === filtroAno
        }
        return item
    })
    res.json(filmeEscolhido)
})
<<<<<<< HEAD
app.get("/filmes/:id", (req, res) => {
    const id = req.params.id
=======

app.get("/filmes/:id", (req, res) => {
    const id = req.params.id // Retorna uma string
>>>>>>> 7b22de39645fa34c11d762e090e022c282ef170b

    const filmeEscolhido = listaDeFilmes.filter((item, index) => item.id == id)

    res.json(filmeEscolhido)

})

app.post("/filmes", (req, res) => {
    const body = req.body

    listaDeFilmes.push(body)

    res.json(listaDeFilmes)
})

<<<<<<< HEAD

app.listen(port, () => {
    console.log("Api está escutando na porta 3000")
})
=======
app.listen(port, () => {
    console.log("Api está escutando na porta 3000")
})
>>>>>>> 7b22de39645fa34c11d762e090e022c282ef170b
