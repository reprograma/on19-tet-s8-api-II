
const express = require("express")
const app = express()
const port = 3030
const listaDeProdutos = require("./model/produtos.json")

app.use(express.json())

app.get("/produtos",(req,res)=>{ // para ver todos os produtos http://localhost:3030/produtos 
    const filtraPorNome = req.query.nome?.toLowerCase() //filtra por nome http://localhost:3030/produtos?nome=Cadeira
    const FiltraPorValor = req.query.valor // filtra por valor http://localhost:3030/produtos?valor=2000
    const filtraPorDescricao = req.query.descricao?.toLowerCase() //filtra por descrição http://localhost:3030/produtos?descricao=caro
    
    const produtoSElecionado = listaDeProdutos.filter((produto,i) => {
        if(filtraPorNome) {
            return produto.nome.toLowerCase().includes(filtraPorNome)
        }
        if (FiltraPorValor) {
            return produto.valor == FiltraPorValor
        }
        if(filtraPorDescricao) {
            return produto.descricao.toLowerCase().includes(filtraPorDescricao)
        }
        return produto
    })
    res.json(produtoSElecionado)
})

app.get("/produtos/:id",(req,res)=>{
    const id = req.params.id // filtra por ID http://localhost:3030/produtos/3
    const produtoSelecionado = listaDeProdutos.filter((item, index)=> item.id == id)
        res.json(produtoSelecionado)
})

app.post("/produtos/add",(req,res)=>{
    const body = req.body  // para adicionar produto http://localhost:3030/produtos/add
    listaDeProdutos.push(body)
    res.send(listaDeProdutos)
})

app.listen(port,()=>{
    console.log("Api está escutando na porta 3030");
})
