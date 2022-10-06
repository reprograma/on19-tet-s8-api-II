const express = require('express')
const app = express()
const port = 3000
const listaDeProdutos = require("./model/produtos.json")

app.get('/', (req, res) => {
  res.send('Hello World!, para casa, teste')
})



app.get("/produtos", (req, res) => {
  res.json(listaDeProdutos)
})





app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})