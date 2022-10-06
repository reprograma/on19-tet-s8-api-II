<<<<<<< HEAD
const { response } = require("express")
=======
>>>>>>> 32419ccc4ebe368b2a7b6694b99b143590b98ef8
const express = require("express")
const app = express()
const port = 3000
const listaDeFilmes = require("./model/filmes-lista.json")

app.use(express.json())

<<<<<<< HEAD
app.get("/",(req, res)=>{
    res.send("Hello World")
})

app.get("/filmes",(req,res)=>{
    const filtroNome = req.query.nome
    const filtroAno = req.query.nome

    const filmeEscolhido = listaDeFilmes.filter((item,index) => {

        if(filtroNome) {
            return item.Title === filtroNome
        }
        if (filtroAno) {
=======
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
            return item.Title.toLowerCase() === filtroNome.toLowerCase()
        }
        if(filtroAno) {
>>>>>>> 32419ccc4ebe368b2a7b6694b99b143590b98ef8
            return item.Year === filtroAno
        }
        return item
    })
<<<<<<< HEAD

    res.json(filmeEscolhido)
})

app.get("/filmes/:id",(req,res)=>{
    const id = req.params.id

    const filmeEscolhido = listaDeFilmes.filter((item, index)=> item.id == id)
        res.json(filmeEscolhido)
  
})

app.post("/",(req,res)=>{
    const body = req.body

    console.log(body)

    res.send("usuario autenticado")
})

app.listen(port,()=>{
    console.log("Api está escutando na porta 3000");
=======
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
>>>>>>> 32419ccc4ebe368b2a7b6694b99b143590b98ef8
})