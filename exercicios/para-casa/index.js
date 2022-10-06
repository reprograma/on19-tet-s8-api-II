const express = require('express')
const app = express()
const port = 3001
const listaProdutos = require("./model/produtos.json")

app.use(express.json())

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get("/produtos", (req, res) => {
    const filtroNome = req.query.nome
    const filtroValor = req.query.valor
    const produtoEscolhido = listaProdutos.filter((item, index) => { 
      if (filtroNome) {
        return item.nome == filtroNome
        }
        if (filtroValor) {
          return item.valor == filtroValor
          }
     })
    res.json(listaProdutos)
  })

  app.get("/produtos/:id", (req, res) => {
    const id = req.params.id
    const produtoEscolhido = listaProdutos.filter((item, index) => item.id == id)
  })
  

    app.listen(port, () => {
      console.log(`Example app listening on port ${port}`)
    })
