const express = require('express') // importando pacote express
const app = express() // criando servidor express
const port = 3000 // definindo porta do servidor
const listaProdutos = require('./model/produtos.json') // importando json de produtos

app.use(express.json())

app.listen(port, () => {
  console.log('API is ON, baby!!')
})

// endpoint que lista os produtos por id
app.get('/produtos/:id', (req, res) => {
  const id = req.params.id
  const getById = listaProdutos.filter((item, index) => item.id == id)
  res.json(getById)
})

// endpoint que lista todos os produtos
app.get('/produtos', (req, res) => {
  return res.json({ listaProdutos })
})

// endpoint que adiciona um produto ao json
app.post('/produtos', (req, res) => {
  const body = req.body
  listaProdutos.push(body)

  res.json(listaProdutos)
})

// endpoint que deleta um produto
app.delete('/produtos/:id', (req, res) => {
  const id = req.params.id
  const deleteById = listaProdutos.filter((item, index) => item.id == id)
  res.json(deleteById)
})

// endpoint que busca produto usando filtro de nome e valor
app.get('/produtos', (req, res) => {
  const nome = req.query.nome
  const valor = req.query.ano

  const filtroProduto = listaProdutos.filter((item, index) => {
    if (nome) {
      return item.nome.toLowerCase() === nome.toLowerCase()
    }
    if (valor) {
      return item.valor === valor
    }
    return item
  })
  res.json(filtroProduto)
})
