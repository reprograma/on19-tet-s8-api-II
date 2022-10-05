const express = require("express")//require só funciona para bibliotecas, no caso a biblioteca express
const app = express()//criando uma função dentro de app
const port = 3333//declarar um valor qualquer
const listaDeProdutos = require("./model/produtos.json")

app.use(express.json())
//http://localhost:3333/produto localiza a lista de produtos
app.get("/produto",(req,res)=>{// app chama uma get, get recebe 2 argumentos... 1 argumento o end point(no caso /), 2 trabalha a função call bak e o argumento 1
    const filtroNome = req.query.nome?.toLocaleLowerCase() //filtro por nome
    const filtroDescricao = req.query.descricao?.toLocaleLowerCase() //filtro pro descrição


    const produtoEscolhido = listaDeProdutos.filter((item,index) => {

        if(filtroNome) {
            return item.Title.toLowerCase() === filtroNome.toLocaleLowerCase()
        }
        if (filtroDescricao) {
            return item.descricao === filtroDescricao
        }
        return item
    })

    res.json(produtoEscolhido)
})

app.get("/produto/:id",(req,res)=>{//consulta refinada usando params http://localhost:3333/produto/4
    const id = req.params.id //filtro por id
console.log(req.params)
    const produtoEscolhido = listaDeProdutos.filter((item, index)=> item.id == id)
        res.json(produtoEscolhido)
  
})

app.post("/produto",(req,res)=>{
    const body = req.body

    listaDeProdutos.push(body)

    res.send(listaDeProdutos)//send é um método
})
// manipula questão e filtrar a resposta ideal
app.listen(port, () =>{//callbak só pra imprimir // listen 
    console.log("Api está escutando na porta 3333");
})//listen = ouvindo quando a porta 3333 for solicitada
