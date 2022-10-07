const express = require ("express")
const app = express()
const port = 7777

const moviesList = require ("./model/filmes-lista.json")

app.use (express.json())
//   ^ precisa dessa parada aqui pra pegar o body ali no POST - product/add

app.get ("/", (request, response) => {
    response.send ('Hello World')
})


// ordem dos .get importa pra caralho, tipo, pra caralho
// mesmo nome pro mesmo comando .get ou .post da merda
//pode mesmo nome para UMA .post e UMA .get, mas não duas .post ou duas .get

app.get ("/movies", (req, res) => {
    const filterName = req.query.name
    const filterYear = req.query.year

    const filmeEscolhido = moviesList.filter ((item, index) => {
        if (filterName){
            return item.Title.toLocaleLowerCase() === filterName.toLocaleLowerCase()
        }
        if (filterYear){
            return item.Year.toLocaleLowerCase() === filterYear.toLocaleLowerCase()
        }
        return item
    })
    res.json(filmeEscolhido)
})

app.get ("/movies/:id", (req, res) => {
    const id = req.params.id
//                  ^ pegar parametro que vem no lugar no :id
    const selectMovie = moviesList.filter ((item, index) => item.id == id)

    res.json (selectMovie)
})

app.get ("/movies", (req, resp) => {
    resp.json (moviesList)
})

app.post ("/", (req, resp) => {
    const body = req.body

    console.log (body)

    resp.send("usuario autenticado")
})

app.listen (port, () => {
    console.log (`API is listening on port ${port}`)
})