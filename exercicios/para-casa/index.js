const { response } = require("express")
const express = require ("express")
const app = express()
const port = 3000

const CheckProduct = require ("./CheckProduct")

const productsList = require ("./model/produtos.json")

let globalID = 0
for (let idIndex = 0; idIndex < productsList.length; idIndex++){
    if (globalID <= productsList[idIndex].id){
        globalID = productsList[idIndex].id+1
    }
} 

app.use (express.json())
//   ^ precisa dessa parada aqui pra pegar o body ali no POST - product/add

app.get ("/", (req, res) => {
    res.json (productsList)
})

app.get ("/product/add", (req, res) => {
    res.json ("Produto necessita apenas de: nome, descricao e valor")
})

app.post ("/product/add", (req, res) => {
    const add = req.body
    const isValidProduct = CheckProduct (add) 
    if (isValidProduct){
        add.id = globalID
        productsList.push (add)
        globalID++
        res.json (productsList)
    }
    else{
        res.send ("Produto não adicionado por falta/excesso de informação. Verifique as infos necessárias com método GET no mesmo endereço")
    }
})

app.get ("/product/:id", (req, res) => {
    const id = req.params.id
    const productSelected = productsList.filter (item => item.id == id)
    res.json (productSelected)
})

app.get ("/product", (req, res) => { //filters
    const filterName = req.query.name
    const filterPrice = req.query.price
    const filterDesc = req.query.desc

    let filterNumber
    if (filterPrice){
        const filterParts = filterPrice.split("")
        if (filterPrice[0] == '<' || filterPrice[0] == '>'){
                filterParts.splice(0, 1)
        }
        filterNumber = Number(filterParts.join(""))
    }
    const productSelected = productsList.filter ((item, index) => {
        if (filterName){
            return item.nome.toLocaleLowerCase().includes(filterName.toLocaleLowerCase())
        }
        if (filterPrice){
            switch (filterPrice[0]){
                case '<' :
                    return item.valor <= filterNumber
                case '>' :
                    return item.valor >= filterNumber
                default:
                    return item.valor == filterNumber
            }
        }
        if (filterDesc){
            return item.descricao.toLocaleLowerCase().includes(filterDesc.toLocaleLowerCase())
        }
        return item
    })
    if (productSelected.length == 0){
        res.json (productsList)
    }
    res.json (productSelected)
})

app.get ("/help", (req, res) => {
    const help = `Essa API possui recursos para visualizar todos os produtos disponíveis [/product], cada produto por ID [/product/:id], filtros [/product?{name,price,desc}={value}] e filtro de preço para filtrar se deseja mais caro ou mais barato que algum valor (basta inserir '<' ou '>' antes do valor). Também é possível adicionar novos produtos com método POST [/product/add]. Para visualizar o código, basta seguir para: https://github.com/TotallyBabyWolf/on19-tet-s8-api-II`
    res.json (help)
})

app.listen (port, () => {
    console.log (`API is listening on port ${port}`)
})