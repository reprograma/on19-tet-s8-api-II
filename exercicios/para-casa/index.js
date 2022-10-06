const express = require('express');
const app = express();
const port = 8000;

const listaDeProdutos = require("./model/produtos.json");


app.get('/', (req, res) => {
  res.send("Olá, seja bem vinda.")
})

app.get("/produtos", (req, res) => {
    res.send(listaDeProdutos)
})

app.get("/produtos/:id", (req, res) => {
    const idProduto = req.params.id
    const produtoLocalizado = listaDeProdutos.filter((item, index) => item.id == idProduto)
    res.json(produtoLocalizado)
})

app.get("/produtos", (req, res) => {
    const encontrarPorNome = req.query

    res.json(encontrarPorNome)
})


app.listen(port, () => {
  console.log("API está escutando na porta 3000")
})