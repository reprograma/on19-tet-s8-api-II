const express = require("express");
const app = express();
const port = 3000;
const listaProd = require("./model/produtos.json");

app.use(express.json());


app.get("/produtos/:id", (req, res) => {
  const id = req.params.id;

  const prodEscolhido = listaProd.filter((item) => item.id == id);

  res.json(prodEscolhido);
});


app.get("/produtos", (req, res) => {
  res.json(listaProd);
});


app.post("/produtos", (req, res) => {
  const body = req.body;

  listaProd.push(body);

  res.json(listaProd);
});


app.get("/produtos", (req, res) => {
  const filtroNome = req.query.nome;
  const filtroValor = req.query.valor;

  const prodFiltros = listaProd.filter((item) => {
    if (filtroNome) 
      return item.nome.toLocaleLowerCase() == filtroNome.toLocaleLowerCase();

    if (filtroValor) 
      return item.valor == filtroValor;

    return item;
  });
  res.json(prodFiltros);
});

app.listen(port, () => {
  console.log("Api está escutando na porta 3000");
});