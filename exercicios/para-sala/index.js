
const express = require("express")

const app = express()
const port = 3000
const filmList = require("./model/filmes-lista.json")

app.use(express.json())

app.get("/", (req, res)=> {
    res.send("Hello, world")
})

app.get("/filmes", (req, res) => {
    const nameFilter = req.query.nome
    const yearFilter = req.query.ano

    const chosenFilm = filmList.filter((item, index) => {
    if(nameFilter) {
        return item.Title == nameFilter
    }
    if(yearFilter) {
        return item.Year == yearFilter
    }   
    return item
})
    res.json(chosenFilm)
})

app.get("/filmes/:id", (req, res) => {
    const id = req.params.id
    
    const chosenFilm = filmList.filter((item, index) => item.id == id)
    res.json(chosenFilm)
})

app.post("/filmes", (req, res) => {
    const body = req.body

    filmList.push(body)

    res.json(filmList)
})

app.listen(port, () => {
    console.log("API is listening to port 3000.");
})

// HOST = localhost
// PORT = 2300