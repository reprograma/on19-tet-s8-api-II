const express = require("express");
const app = express();
const port = 3000;
const listaProd = require("./model/produtos.json");

app.use(express.json());

//Expor uma rota GET que recebe o ID de um produto e retorna apenas esse produto na lista de produtos
app.get("/produtos/:id", (req, res) => {
  const id = req.params.id;

  const prodEscolhido = listaProd.filter((item) => item.id == id);

  res.json(prodEscolhido);
});

//criar uma rota GET que lista TODOS os produtos da lista de produtos.
app.get("/produtos", (req, res) => {
  res.json(listaProd);
});

//Adicionar um novo item à lista de produtos e retorna a lista atualizada
app.post("/produtos", (req, res) => {
  const body = req.body;

  listaProd.push(body);

  res.json(listaProd);
});

/* Utilizar o recurso `req.query` para criar filtros ( ex.: buscar por nome do produto, valor... ) 
 Os filtros ficam a seu critério mas espero que exista ao menos dois filtros para sua rota */
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
