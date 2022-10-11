const express = require("express")
const app = express()
const listaProdutos =  require("./model/produtos.json")
const port = 3000

app.use(express.json())


//Formato já com a revisão

//******************************* 

// TODO:[x] expor uma rota GET que recebe o ID de um produto e retorna apenas esse produto na lista de produtos - DONE
app.get("/produto/:id",(req, res)=>{
    const id = req.params.id
    
    const produtoEscolhido = listaProdutos.filter(produto => produto.id == id)

    res.json(produtoEscolhido)
})
// TODO:[x] Utilizar o recurso `req.query` para criar filtros ( ex.: buscar por nome do produto, valor... ) - * Os filtros ficam a seu critério mas espero que exista ao menos dois filtros para sua rota * - DONE
// TODO:[x] criar uma rota GET que lista TODOS os produtos da lista de produtos. - DONE
app.get("/produto",(req, res)=>{
    const filtroNome = req.query.name
    const filtroValor = req.query.valor

    const produtosFiltrados = listaProdutos.filter((produto)=>{
        if(filtroNome){
            return produto.nome.toLowerCase() == filtroNome.toLowerCase()
        }
        if(filtroValor){
            return produto.valor == filtroValor
        }
        return produto
    })
    res.json(produtosFiltrados)
})
// TODO:[x] Adicionar um novo item à lista de produtos e retorna a lista atualizada - DONE
app.post("/produto",(req, res)=>{
    const body = req.body

    listaProdutos.push(body)

    res.json(listaProdutos)
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })

/* ********************************************** */

/* Minhas soluções 
app.get("/produtos%20", (req, res) => {
  const filtroNome = req.query.nome
  const filtroValor = parseFloat(req.query.valor)

  const produtoEscolhido = listaProdutos.filter((item, index) => {
      if(filtroNome) {
          return item.nome.toLowerCase() === filtroNome.toLocaleLowerCase()
      }
      if(filtroValor) {
          return item.valor === filtroValor
      }
      return item
  })
  res.json(produtoEscolhido)
})



app.get("/produtos", (req,res) =>{
  res.json(listaProdutos)
  
})

app.get("/produtos/:id", (req,res) => {
   const id = req.params.id
    const produtoEscolhido = listaProdutos.filter((item, index) => item.id == id)

    res.json(produtoEscolhido)

})


app.post("/produtos", (req,res) =>{
  const body = req.body

 listaProdutos.push(body)

  res.json(listaProdutos)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})*/