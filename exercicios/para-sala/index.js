const listaDeFilmes = require("./model/filmes-lista.json")

const express = require("express")
const app = express()
const port = 2022
app.use(express.json())

//teste 1
app.get("/", (req, res) => { 
    res.send("Hello human ! I am E.T Purple")//aparece no terminal do postman
    
   })

  //teste 2 
app.post("/", (req, res)=>{
    const body= req.body
    console.log(body)
    res.send("usuario autenticado")
    
})


//listando todos os filmes
app.get("/filmes", (req, res) => {
    res.json(listaDeFilmes)
})
// Acessando por ID
app.get("/filmes/:id", (req, res)=> {
    const  ID = req.params.id
    const filme_Escolhido = listaDeFilmes.filter((item, index)=> item.id ==ID)
    res.json(filme_Escolhido)
})
//acesando com o ano e o nome do filme
app.get("/filmes", (req, res) => {
    const filtroNome = req.query.nome
    const filtroAno = req.query.ano

    const filmeEscolhido = listaDeFilmes.filter((item, index) => {
        if(filtroNome) {
            return item.Title.toLowerCase() === filtroNome.toLowerCase()
        }
        if(filtroAno) {
            return item.Year === filtroAno
        }
        return item
    })
    res.json(filmeEscolhido)
})

//funcionou :)
app.post("/filmes", (req, res) => {
    const body = req.body

    listaDeFilmes.push(body)//adiciona item no final de uma arrya

    res.json(listaDeFilmes)

})
app.delete("/del/:id", (req, res)=>{
    const IdFilmes =  req.params.id
    
    res.status(500).json(` O filme que posui o id ${IdFilmes} foi deletado com sucesso`)
})


app.listen(port, () => {
    console.log("Porta rodando com sucesso")//aparece no terminal do vscode
})



