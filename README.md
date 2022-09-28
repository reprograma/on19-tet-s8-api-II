# Tema da Aula

Turma Online 19 - Todas em Tech | Back-end | Semana 8 | 2022 | Professora Manuelly Suzik

### Instruções

Antes de começar, vamos organizar nosso setup.

- Fork esse repositório
- Clone o fork na sua máquina (Para isso basta abrir o seu terminal e digitar `git clone url-do-seu-repositorio-forkado`)
- Entre na pasta do seu repositório (Para isso basta abrir o seu terminal e digitar `cd nome-do-seu-repositorio-forkado`)

### Resumo

O que veremos na aula de hoje?

- [Tema da Aula](#tema-da-aula)
    - [Instruções](#instruções)
    - [Resumo](#resumo)
  - [Conteúdo](#conteúdo)
    - [Introdução a API](#introdução-a-api)
    - [Servidores, Endpoints, Rotas , Status Codes, Métodos HTTP e POSTMAN](#servidores-endpoints-rotas--status-codes-métodos-http-e-postman)
    - [Métodos HTTP: GET + POST](#métodos-http-get--post)
  - [Esse curso seguirá a convenção de comunicação API RESTful](#esse-curso-seguirá-a-convenção-de-comunicação-api-restful)
    - [Exercícios](#exercícios)
    - [Material da aula](#material-da-aula)
    - [Glossário](#glossário)
    - [Links Úteis](#links-úteis)

## Conteúdo

### Introdução a API

1. [O que é API](#api-pra-que-serve)
   - _Application Programming Interface_: literalmente significa que é uma interface de programação para aplicações. Na prática, API's foram criadas para facilitar a troca de informações entre os clients e o sistema / serviço / dispositivo e etc. O funcionamento consiste em a API receber requisições de um client qualquer e responder em um formato que o client consiga interpretar.Assim, o client consegue ter acesso as informações para utiliza-las.
2. [REST e SOAP](#o-que-e-rest)
   1. [REST](https://becode.com.br/o-que-e-api-rest-e-restful/)(_Representational state transfer_): Um modelo relativamente novo ( e mais utilizado ) de comunicação de construção de API. É representado pelas convenções / princípios / regras de métodos HTTP e formato de resposta, normalmente em JSON( Javascript Object Notation ).
   2. [SOAP](https://www.ibm.com/docs/pt-br/integration-bus/10.0?topic=services-what-is-soap)(_Simple object access protocol_): Uma forma mais antiga de construir API's, utiliza como resposta documentos XML. Com padrões de comunicação e regras diferentes.

### Servidores, Endpoints, Rotas , Status Codes, Métodos HTTP e POSTMAN

1. [Servidores](https://www.controle.net/faq/o-que-sao-servidores)
   Os servidores é um conceito dado a onde as aplicações ficam armazenadas e são executadas. De uma maneira simples, o servidor é um computador que está hospedado em algum lugar do mundo e que pode ser acessado pela internet. Esses servidores são máquinas dedicadas apenas para rodar suas aplicações , você pode contratar servidores pelo seu desempenho e armazenamento dependendo da sua necessidade.
2. [Status Codes](#status-codes)
   Os Http status codes são números que representam o status da resposta da sua requisição foi completada com sucesso ou não. O status code também informa a fonte do erro a partir do número que foi enviado e segue a seguinte convenção:
   - [Information Codes](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status#information_responses) -
     1XX: Compoem códigos de resposta para informações, não é comumente utilizado.
   - [Client Codes](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status#client_error_responses) -
     4XX: Status codes que começam com 4 indicam que a fonte do erro foi causada pelo cliente. (Ex.: Formulário preenchido com valores inválidos , páginas não encontradas , endereço solicitado não encontrado , falta de autorização...)
   - [Server Codes](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status#server_error_responses) -
     5XX: Status code que começam com o 5 indicam que o erro surgiu por parte do servidor (Ex.: Falta de memória , queda de conexão com o servidor, manutenção...)
   - [Success Codes](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status#successful_responses) -
     2XX: Status code iniciados com o 2 mostra que a resposta à sua requisição ao servidor foi um sucesso. Os mais comuns são o de Sucesso (200) e Criado (201).
   - [Redirect Codes](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status#redirection_messages)
     3XX - Normalmente não são muito utilizados no modelo REST mas esses status codes avisam se sua requisição de origem foi redirecionada para outro endereço.
3. [Rotas e Endpoints]()
   - As rotas são endereços de acessos à recursos da API , por exemplo: vá até o google e perceba que na página inicial o endereço é apenas `https://www.google.com/` mas se clicarmos para buscar algo o endereço muda, ele terá esse formato: `https://www.google.com/search? ...` o **/search** é o recurso que estamos acessando do google ( no caso a busca ) e o que vem depois do `?` são dados para refinar o resultado de sua busca no google. Essa URL completa com os refinamentos damos o nome de endpoint.
4. [HTTP CLIENTS](#http-clients)
   - [POSTMAN](https://www.postman.com/)
   - [INSONMIA](https://insomnia.rest/)

### Métodos HTTP: GET + POST

## Esse curso seguirá a convenção de comunicação API RESTful

### Exercícios

- [Listar items de um carrinho](/exercicios/para-casa/)
- [Criar Item no carrinho](/exercicios/para-casa/)
- [Listar Item desejado no carrinho](/exercicios/para-casa/)

### Material da aula


### Links Úteis

- [Basico sobre http](https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Basics_of_HTTP)
- [Requisições HTTP](https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Messages#requisi%C3%A7%C3%B5es_http)
- [REST API](https://becode.com.br/o-que-e-api-rest-e-restful/)
- [Express JS](https://expressjs.com/pt-br/)

<p align="center">
Desenvolvido com :purple_heart:  
</p>
