
const { response } = require("express")
const express = require("express")
const app = express()
const port = 3001
const listaDeProdutos = require("./model/produtos.json")

app.use(express.json())

app.get("/",(req, res)=>{
    res.send("Hello World")
})

//GET filmes
app.get("/filmes",(req,res)=>{
    const filtroNome = req.query.nome
    const filtroValor = req.query.nome

    const produtoEscolhido = listaDeProdutos.filter((item,index) => {

        if(filtroNome) {
            return item.nome.toLowerCase() === filtroNome.toLocaleLowerCase() //Aula Quarta
        }
        if (filtroValor) {
            return item.valor === filtroValor
        }
        return item
    })

    res.json(produtoEscolhido)
})

app.get("/produto/:id",(req,res)=>{
    const id = req.params.id

    const produtoEscolhido = listaDeFilmes.filter((item, index)=> item.id == id)
        res.json(produtoEscolhido)

})

app.post("/produto",(req,res)=>{
    const body = req.body

    listaDeProdutos.push(body)

    res.send(listaDeProdutos)
})

app.listen(port,()=>{
    console.log("Api está escutando na porta 3001");
})