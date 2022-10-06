const express = require("express")
const app = express()
const port = 3000

app.use(express.json()) 

// expor uma rota GET que recebe o ID de um produto e retorna apenas esse produto na lista de produtos
const listaDeProdutos = require("./model/produtos.json")
    app.get("/produtos:id",(req, res) => {
        const id = req.params.id
        const produtoEscolhido = listaDeProdutos.filter((item, index) => item.id == id)
        res.json(produtoEscolhido)

    })
// criar uma rota GET que lista TODOS os produtos da lista de produtos.
app.get("/produtos", (req, res) => {
    res.json(listaDeProdutos)
  })

  //Adicionar um novo item à lista de produtos e retorna a lista atualizada
app.post("/", (req, res) => {
    const body = req.body

    listaDeProdutos.push(body)
    res.json("listaDeProdutos")
})

// Utilizar o recurso req.query para criar filtros ( ex.: buscar por nome do produto, valor... ) - * Os filtros ficam a seu critério mas espero que exista ao menos dois filtros para sua rota *
app.get("/produtos", (req, res) => {
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
    console.log("API está escutando na porta 3000")
  })