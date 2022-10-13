const express = require("express")  // cria uma variavel para pegar tudo que tem dentro do express, usando o require(só funciona para lib) que é uma função resevada para ir 
                                    //buscar um lib que tem salva no node_modules. Nesse caso o express. Agora essa função tem todo o express
const app = express() // Criar uma const app. Transformando a const express em função. Sendo declarada dentro da const app. Agora app vai receber a função express.

const port = 3000 // portas de serviço só pode ser numero, geralmente 3333 ou 3000. Podendo ser qualquer numero. 
                  // rota do tipo get, com o end point "/", que responde "hello wold" com a porta 3000. 
const listaDeFilmes = require("./model/filmes-lista.json") // puxando a lista de filmes para a api.
app.use(express.json())        // para subir um json e responder um json no postman precisa abilitar o body pass ( é uma biblioteca, que quando mandar um jason ele vai saber utilizar a chave e o valor) no express, mudar  o content-Type.  como habilitar? usa o metodo nativo do express .use, que é utilizado para executar pugling , para fazer alguns tipos de pugligs intercepitos ( quando o cliente manda algo, antes de chegar essas iformalções o intercepto trata essas informações). ELe intercipita a informação antes de chegar no distino. 
                               // App.use é um função utilizada para usar interceptos dentro do express. A função exprees.json é um intercepto para que a api leia e mande json no bory da requisição. 

app.get("/", (req, res) => {
    res.send("Hello World")                        // .send é um metodo que diz, manda pra ele. Manda na resposta
})                              // criar um endpoint que espera receber um metodo get e recebe 2 parametros, 1 parametro é o valor do endpoint que é a rota da api, e o 2 é uma função. (que vai ser a nossa função handlers), pode ser chamado de função de call back. Essa função call back, não tem nome, ela é executada na função que tá sendo chamada e já retorna
                                // função call back a gente consegu manipular a resposta para pegar valores que o cliente mandou (usando req ou request) e dar uma resposta para ele (usando res). Uma requisição e uma resposta.
//  Para acessar a api ( a api é uma porta e precisamos saber qual é)
// HOST = localhost
// PORT = 3000 (numero da porta)
//http://HOST:PORT

// metodo post - fazer uma requisição usando post
// Criar uma rota que espra ser chamada no metodo post, definio que o caminho dela vai ser "/" e vai exucultar call back que vai retornar uma req (oque o usuari mando para api) e uma res (oque a api vai enviar para o cliente) com parametros, criou uma const bory  que vai armezar tudo que receber no bory, antes de rodar vou confirma se ele recebeu o bory com console.log, depois que receber as infos vai retorna o res.send com "usuario autenticado".


app.get("/filmes", (req, res) => {     
    const filtroNome = req.query.nome
    const filtroAno = req.query.ano      // adicionar mais filtros, usando query params para buscar no postman por query tem que usar "?filtro+valor" ex:?nome=Avatar. 

    const filmeEscolhido = listaDeFilmes.filter((item, index) => {
        if(filtroNome) {
            return item.Title.toLowerCase() === filtroNome.toLowerCase()  // == igual "1" em frase = 1
        }                                    // === identico "1" em frase = "1" em frase
        if(filtroAno) {
            return item.Year === filtroAno
        }
        return item
    })
    res.json(filmeEscolhido)
});

app.get("/filmes/:id", (req, res) => {  // para acessar por id aadciona depois da rota /filmes o params :id. 

    const id = req.params.id      // essa constante vai receber o numero digitado na rota. Para conseguir acessar o params id utilizasse a propriedade params da req(requisição).

    const filmeEscolhido = listaDeFilmes.filter((item, index) => item.id == id)

    res.json(filmeEscolhido)
}); 

// criando uma rota post para adicionar filme
//app.post("/adicionarfilme", (req, res) => {
//})
app.post("/addfilmes", (req, res) => {
    const body = req.body

    listaDeFilmes.push(body)

    res.json(listaDeFilmes)
})




app.post("/",(req, res) => {
    const body = req.body

    console.log(body)

    res.send("usuário autenticado")
})


// Como subuir o servidor.
app.listen(port, () => {
    console.log("Api está escutando na pota 3000")
})                                                  // .listen é um metodo do express e ele recebe 2 paramatros tbm, 1 é a posta de serciço fazendo com que a api esculte essa posta, e o 2  parametro é uma call backk usando o console log muitas vezes não usado (só se quiser).

                                                    // comando para saber se a api está funcionando = node index.js (o nome da api)

                                                   // para subir um json e responder um json no postman precisa abilitar o body pass ( é uma biblioteca, que quando mandar um jason ele vai saber utilizar a chave e o valor) no express, mudar  o content-Type.  como habilitar? 
// para não precisar derrubar servidor e subir novamente quando fizer alguma alteração. Use o nodemon. 
// O nodemo é um lib que que monitorarão quaisquer alterações em sua fonte e reiniciarão automaticamente seu servidor. Perfeito para desenvolvimento.
// ELe é uma ferramenta utilizada no momento de estar desenvolvendo, não precisa colocar o --g pq é gemelis é utilizado quando quer instalar globalmente na maquina, e nesse momento só queremos no projeto. Api em produção queremos que ela fique no oline sempre. Para poder declarar uma depesencia de desevolviemnto que não querenmos que ela vá para produção, colocamos --dev ou --D.
// Api de desenvolvimento utilizada pelos dev e Api em produção que é utilizada pelos clientes.
// Para instalar o nodemon - npm install nodemon --D