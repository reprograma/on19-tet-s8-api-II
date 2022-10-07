
const express = require("express")
const app = express()
const port = 3000
const listaDeFilmes = require("./model/filmes-lista.json")

app.use(express.json())

app.get("/",(req, res)=>{
    res.send("Hello World")
})


app.get("/filmes",(req,res)=>{
    const filtroNome = req.query.nome
    const filtroAno = req.query.ano

    const filmeEscolhido = listaDeFilmes.filter((item,index) => {

        if(filtroNome) {
            return item.Title.toLowerCase() === filtroNome.toLowerCase()
        }
        if (filtroAno) {
            return item.Year === filtroAno
        }
        return item
    })

    res.json(filmeEscolhido)
})

app.get("/filmes/:id",(req,res)=>{
    const id = req.params.id

    const filmeEscolhido = listaDeFilmes.filter((item, index)=> item.id == id)
        res.json(filmeEscolhido)
  
})

app.post("/filmes",(req,res)=>{
    const body = req.body

    listaDeFilmes.push(body)

    res.send(listaDeFilmes)
})

app.listen(port,()=>{
    console.log("Api está escutando na porta 3000");
})

/*
HOST = LOCAL HOST
PORT = 3000 (PORTA)
http://host:port  = http://localhost:3000/
*/ 