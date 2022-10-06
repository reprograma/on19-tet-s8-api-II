const express = require("express")
const app = express()
const port = 3333
const listaDeProdutos = require("./model/produtos.json")

// para testes no postman o script é: npm run start

app.use(express.json())

// lista todos os produtos 
app.get("/produtos", (req, res) => {
    res.json(listaDeProdutos)
})

// lista através dos filtros escolhidos
app.get("/produtos", (req, res) => {
    const filtroId = req.query.id
    const filtroNome = req.query.nome

    const produtoEscolhido = listaDeProdutos.filter(item => {
        if(filtroId) {
            return item.id === filtroId
        }
        if(filtroNome) {
            return item.nome.toLowerCase() === filtroNome.toLowerCase()
        }
        return item
    })
    res.json(produtoEscolhido)
})

// lista os preços do mais barato até o mais caro
app.get("/produtos/preco", (req, res) => { 
    
    listaDeProdutos.sort((prod1, prod2) =>  {
        return prod1.valor < prod2.valor ? -1 : prod1.valor > prod2.valor ? 1 : 0;
    });
    res.json(listaDeProdutos)
})

// adiciona novos itens a lista de produtos
app.post("/produtos", (req, res) => {
    const body = req.body

    listaDeProdutos.push(body)

    res.json(listaDeProdutos)
})

// lista produtos por id
app.get("/produtos/:id", (req, res) => {
    const id = req.params.id

    const produtoEscolhido = listaDeProdutos.find(item => item.id == id)
    
    res.json(produtoEscolhido)
})



app.listen(port, () => {
    console.log("API na porta 3333")
})

