const express = require("express")
const app = express()
const port = 3333
const listaDeProduto = require("./model/produtos.json")
app.use(express.json())

app.get("/", (req, res) => {
    res.send("Hello World")

})

// [ ] expor uma rota GET que recebe o ID de um produto e retorna apenas esse produto na lista de produtos
app.get("/produto/:id", (req, res) => {
    const id = req.params.id
    const produtoEscolhido = listaDeProduto.filter((item, index) => item.id == id)

    res.json(produtoEscolhido)
})
// [ ] criar uma rota GET que lista TODOS os produtos da lista de produtos.
app.get("/lista", (req,res) =>{
    const lista = req.listaDeProduto

    res.json(listaDeProduto)
})
// [ ] Adicionar um novo item à lista de produtos e retorna a lista atualizada
app.post("/addproduto", (req, res) => {
    const body = req.body
    
    listaDeProduto.push(body)

    res.json(listaDeProduto)
})
// [ ] Utilizar o recurso `req.query` para criar filtros ( ex.: buscar por nome do produto, valor... ) - *
 //Os filtros ficam a seu critério mas espero que exista ao menos dois filtros para sua rota * 
app.get("/produto", (req, res) =>{
    const filtroNome = req.query.nome
    const filtroValor = req.query.valor

    const produtoEncontrado = listaDeProduto.filter((item, index) =>{
        if(filtroNome) {
            return item.nome.toLowerCase() == filtroNome.toLowerCase()
        }
        if(filtroValor) {
            return item.valor == filtroValor
        }
        return item
    })
    res.json(produtoEncontrado)
})

app.listen(port, () => {
    console.log("Api está escutando na porta 3333")
})