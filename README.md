
# Tema da Aula

Turma Online 19 - Todas em Tech  | Back-end | Semana 8 | 2022 | Professora Manuelly Suzik

### Instruções
Antes de começar, vamos organizar nosso setup.
* Fork esse repositório 
* Clone o fork na sua máquina (Para isso basta abrir o seu terminal e digitar `git clone url-do-seu-repositorio-forkado`)
* Entre na pasta do seu repositório (Para isso basta abrir o seu terminal e digitar `cd nome-do-seu-repositorio-forkado`)
* [Add outras intrucoes caso necessario]

### Resumo
O que veremos na aula de hoje?
- [Tema da Aula](#tema-da-aula)
    - [Instruções](#instruções)
    - [Resumo](#resumo)
  - [Conteúdo](#conteúdo)
    - [Introdução a API](#introdução-a-api)
    - [Servidores, Endpoints, Rotas , Status Codes, Métodos HTTP e POSTMAN](#servidores-endpoints-rotas--status-codes-métodos-http-e-postman)
  - [Introdução a API](#introdução-a-api-1)
      - [O que é API e para o que serve](#o-que-é-api-e-para-o-que-serve)
      - [API modernas](#api-modernas)
    - [Servidores, Endpoints, Rotas , Status Codes, Métodos HTTP e POSTMAN](#servidores-endpoints-rotas--status-codes-métodos-http-e-postman-1)
      - [Servidores](#servidores)
      - [Status code](#status-code)
      - [Rotas e Endpoints](#rotas-e-endpoints)
      - [HTTP Clients](#http-clients)
    - [Métodos HTTP: GET + POST](#métodos-http-get--post)
    - [Exercícios](#exercícios)
    - [Material da aula](#material-da-aula)
    - [Links Úteis](#links-úteis)

## Conteúdo
### Introdução a API 
1. [O que é API](#api-pra-que-serve)
2. [REST e SOAP](#o-que-e-rest)
### Servidores, Endpoints, Rotas , Status Codes, Métodos HTTP e POSTMAN 
1. [Servidores](https://www.controle.net/faq/o-que-sao-servidores)
    Os servidores é um conceito dado a onde as aplicações ficam armazenadas e são executadas. De uma maneira simples, o servidor é um computador que está hospedado em algum lugar do mundo e que pode ser acessado pela internet. Esses servidores são máquinas dedicadas apenas para rodar suas aplicações , você pode contratar servidores pelo seu desempenho e armazenamento dependendo da sua necessidade.
2. [Status Code](#status-code)
   * [Client Codes](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status#client_error_responses)
    4XX - Status codes que começam com 4 indicam que a fonte do erro foi causada pelo cliente. (Ex.: Formulário preenchido com valores inválidos , páginas não encontradas , endereço solicitado não encontrado , falta de autorização...)
   * [Server Codes](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status#server_error_responses)
    5XX - Status code que começam com o 5 indicam que o erro surgiu por parte do servidor (Ex.: Falta de memória , queda de conexão com o servidor, manutenção...)
   * [Success Codes](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status#successful_responses)
    2XX - Status code iniciados com o 2 mostra que a resposta à sua requisição ao servidor foi um sucesso. Os mais comuns são o de Sucesso (200) e Criado (201).
   * [Redirect Codes](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status#redirection_messages)
    3XX - Normalmente não são muito utilizados no modelo REST mas esses status codes avisam se sua requisição de origem foi redirecionada para outro endereço.
3. [Rotas e Endpoints]()
   * [Diferenças](#diferencas)
   As rotas são endereços de acessos à recursos da API , por exemplo: Se eu quero listar todos os produtos utilizo a ROTA : "https://<baseURL da api>/produtos", já o endpoint ele suporta mais informações como por exemplo filtros de busca.
    Para melhor ficar exemplificado vá até o google e perceba que na página inicial o endereço é apenas `https://www.google.com/` se clicarmos para buscar algo podemos observar que o endereço muda, ele terá esse formato: `https://www.google.com/search? ...` /search é o recurso que estamos acessando do google ( no caso a busca ) o que vem depois do `?` são dados para refinar o resultado de sua busca no google. Essa URL completa com os refinamentos damos o nome de endpoint.
4. [HTTP CLIENTS](#http-clients)
   * [POSTMAN](https://www.postman.com/)
   * [INSONMIA](https://insomnia.rest/)
   
### Métodos HTTP: GET + POST

***
### Exercícios 
* [Exercicio para sala](/exercicios/para-sala/)
* [Exercicio para casa](/exercicios/para-casa/)

### Material da aula 

### Links Úteis
- [Lorem Ipsum](https://www.lipsum.com/feed/html)
- [Lorem Ipsum](https://www.lipsum.com/feed/html)
- [Lorem Ipsum](https://www.lipsum.com/feed/html)
- [Lorem Ipsum](https://www.lipsum.com/feed/html)


<p align="center">
Desenvolvido com :purple_heart:  
</p>

