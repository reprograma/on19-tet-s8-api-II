//O modelo dos produtos está em `/exercicios/para-casa/model/produtos.json`

const express = require("express")
const app = express()
const porta = 2001
app.use(express.json())

app.get("/", (red, res)=>{
  res.send("Testando...")
})
app.listen(porta, ()=>{
  console.log("Aplicação funcionando !")
})

//importando produtos
const listaDeProdutos = require("./model/produtos.json")

//- [ 1] expor uma rota GET que recebe o ID de um produto e retorna apenas esse produto na lista de produtos
app.get("/produto/:id", (req, res)=> {
  const  id = req.params.id
  const produto_Escolhido = listaDeProdutos.filter((item, index)=> item.id ==id)
  res.json(produto_Escolhido)
})

//- [ 2] criar uma rota GET que lista TODOS os produtos da lista de produtos.
app.get("/produto", (req, res) => {
  res.json(listaDeProdutos)
   
 })
//- [ 3] Adicionar um novo item à lista de produtos e retorna a lista atualizada
app.post("/produto", (req, res) => {
  const body = req.body

  listaDeProdutos.push(body)//adiciona item no final de uma arrya

  res.json(listaDeProdutos)

})


//- [4 ] Utilizar o recurso `req.query` para criar filtros ( ex.: buscar por nome do produto, valor... ) - * Os filtros ficam a seu critério mas espero que exista ao menos dois filtros para sua rota * 
app.get("/produto", (req, res) => {
  const filtro_Nome = req.query.nome
  const filtro_Valor = req.query.valor


  const ProdutoEscolhido = listaDeProdutos.filter((item) => {
      if(filtro_Nome) {
          return item.nome.toLocaleLowerCase() === filtro_Nome.toLocaleLowerCase()
      }
      if(filtro_Valor) {
          return item.valor === filtro_Valor
      }
      
      return item
  })
  res.json(ProdutoEscolhido)
})

// usando o delete , para remover produto por Id, retorna uma array vazia[]
//usando o get percebi que exibi somente o item q selecionei
/*app.get("/produto/:id", (req, res)=>{
  const body = req.body

  listaDeProdutos.splice(body)//adiciona ou remove item de uma array

  res.json(listaDeProdutos)

})*/



