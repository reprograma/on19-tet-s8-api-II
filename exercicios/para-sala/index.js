const express = require("express")
const app = express()
const port = 3333

app.get("/",(req, res) => {
    res.send("Hello World")
}) //o primeiro argumento vai ser o endereço. a vírgula é para o próximo argumento. o segundo argumento é  quem vai ser executada.

//para subir o servidor:
app.listen(port, () => {
    console.log("API está escutando na porta")
})