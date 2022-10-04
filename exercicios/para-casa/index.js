const { response } = require("express")
const express = require ("express")
const app = express()
const port = 7777

const CheckProduct = require ("./CheckProduct")

const productsList = require ("./model/produtos.json")

let globalID = 0
for (let idIndex = 0; idIndex < productsList.length; idIndex++){
    if (globalID <= productsList[idIndex].id){
        globalID = productsList[idIndex].id+1
    }
} 

app.listen (port, () => {
    console.log (`API is listening on port ${port}`)
})

app.use (express.json())
//   ^ precisa dessa parada aqui pra pegar o body ali no POST - product/add

app.get ("/", (req, res) => {
    res.json (productsList)
})

app.get ("/product/add", (req, res) => {
    res.json ("Produto necessita de: nome, descricao e valor")
})

app.post ("/product/add", (req, res) => {
    const add = req.body
    const possible = CheckProduct (add) 
    if (possible){
        add.id = globalID
        productsList.push (add)
        globalID++
        res.json (productsList)
    }
    else{
        res.send ("Produto não adicionado por falta de informação. Verifique as infos necessárias com método GET")
    }
})

app.get ("/product/:id", (req, res) => {
    const id = req.params.id
    const productSelected = productsList.filter (item => item.id == id)
    res.json (productSelected)
})

app.get ("/idCount", (req, res) => {
    res.json (globalID)
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
            return item.nome.toLocaleLowerCase().includes(filterDesc.toLocaleLowerCase())
        }
    })
    res.json (productSelected)
})