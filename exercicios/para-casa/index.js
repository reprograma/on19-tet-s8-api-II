const  express = require("express")
const app = express()
const porta = 3000 
app.use(express.json())

const listaDeProdutos = require("./model/produtos.json")

app.get("/", (req, res)=>{
  res.send("Testando...")  //é esperando que essa mensagem exiba no terminal do postman
})


//- [ 1] expor uma rota GET que recebe o ID de um produto e retorna apenas esse produto na lista de produtos
app.get("/produto/:id", (req, res)=> {
  const  id = req.params.id
  const produtoEscolhido = listaDeProdutos.filter((item, index)=> item.id ==id)
  res.json(produtoEscolhido)
})

//- [ 2] criar uma rota GET que lista TODOS os produtos da lista de produtos.
app.get("/produtos", (req, res) => {
  res.json(listaDeProdutos)
   
 })
//- [ 3] Adicionar um novo item à lista de produtos e retorna a lista atualizada
app.post("/AddProduto", (req, res) => {
  const body = req.body  

  listaDeProdutos.push(body)//adiciona item no final de uma arrya

  res.json(listaDeProdutos)

})

//- [4 ] Utilizar o recurso `req.query` para criar filtros ( ex.: buscar por nome do produto, valor... ) - * Os filtros ficam a seu critério mas espero que exista ao menos dois filtros para sua rota * 
app.get("/produto", (req, res) => {
  const filtroNome = req.query.nome //É uma solicitação de informações 
  const filtroValor = req.query.valor


  const ProdutoEscolhido = listaDeProdutos.filter((item) => {
      if(filtroNome) {
          return item.nome.toLocaleLowerCase() === filtroNome.toLocaleLowerCase()
      }
      if(filtroValor) {
          return item.valor === filtroValor
      }
      
      return item
  })
  res.json(ProdutoEscolhido)
})

/* PARA NÃO ESQUECER:
 GET(obter): Este método solicita a url especificada do método get e retorna uma resposta como Future<response>. Aqui, a resposta é uma classe, que contém as informações de resposta.

 POST(postar):  é usado para enviar os dados aos recursos especificados. Ele solicita a url especificada postando os dados dados recebidos e retornando uma resposta como Future<>response.

*/

app.listen(porta, ()=>{
  console.log("Aplicação funcionando !")
 })


