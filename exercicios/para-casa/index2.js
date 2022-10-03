const express = require("express")
const app = express()
const port = 3333
const listaDeProdutos = require("./model/produtos.json")//adicionando fonte de dados

app.use(express.json())

app.get("/produtos/:id", (req, res) => {//rota get para listar produtos por id
    const id = req.params.id
    const produtoEscolhido = listaDeProdutos.filter((item, index) => item.id == id)
    res.json(produtoEscolhido)
})

app.get("/produtos", (req, res) => {//rota get pata listar todos os produtos
    res.json(listaDeProdutos)
})

app.post("/novosprodutos", (req, res) => { // adicionar produto novo
    const body = req.body
    listaDeProdutos.push(body)
    res.json(listaDeProdutos)
})

app.get("/produtos", (req, res) => {//rota para filtros nome, valor
    const filtroNome = req.query.nome;
    const filtroValor = req.query.valor;	
    const produtoEscolhido = listaDeProdutos.filter((item, index) => {
        if(item.nome.toLowerCase().includes(filtroNome)) {            
            return res.json(item)
        }
        if(filtroValor) {
            return item.valor == filtroValor
        }
        return item
    })
    res.json(produtoEscolhido)
});
 
app.listen(port, () => {
    console.log("Api está escutando na porta:" + port)
})

