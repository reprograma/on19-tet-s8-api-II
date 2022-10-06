const express = require("express") //só funciona p libs > Retorne a lib q eu colocar
const app = express() // app vai receber a função express
const port = 3000 
const listaDeFilmes = require("./model/filmes-lista.json")

//Interceptor das requisições - Pode filtar, ler antes e pode retornar erro
app.use(express.json()) //capaz de ler json

//GET
app.get("/", (req,res) => {  // recebe 2 parâmentro: 1º endpoint > 2º handler, uma função = pega request e dá uma resposta
    res.send("Hello World") // qndo bate na barra/ roda o cód // retorna texto
}) 

app.get("/filmes", (req, res) => {
    const filtroNome = req.query.nome
    const filtroAno = req.query.ano

    const filmeEscolhido = listaDeFilmes.filter((item, index) => {
        if(filtroNome) {
            return item.Title.toLowerCase() === filtroNome.toLocaleLowerCase()
        } if (filtroAno) {
            return item.Year === filtroAno
        }
        return item
    })
    res.json(filmeEscolhido) // retorna Json
})


app.get("/filmes/:id", (req, res) => {
    const id = req.params.id // retorna string

    const filmeEscolhido = listaDeFilmes.filter((item, index) =>  item.id == id)
    res.json(filmeEscolhido) // retorna Json
})


// POST
app.post("/", (req, res) => {  
    const body = req.body

    console.log(body)

    res.send("usuário autenticado")

})

app.post("/adicionarFilme", (req, res) => {
    const body = req.body
    listaDeFilmes.push(body) // add item final do array PUSH
    res.json(listaDeFilmes)

})


//HOST = localhost
//PORT = 3000
// http://HOST:PORT

//Subir servidor:

app.listen(port, () => {
    console.log("Api está escutando na porta 3000")
})