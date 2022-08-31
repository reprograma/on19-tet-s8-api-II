import express from 'express';
import listaFilme from '../../assets/filmes-lista.json' assert { type: 'json' };

const app = express();

app.use(express.json());

app.get('/movies/:id', (req, res) => {
  const { id } = req.params;
  const myItem = listaFilme.filter((item) => item.id == id);
  return res.json(myItem);
});

app.get('/', (req, res) => {
  return res.json(listaFilme);
});

app.post('/movies', (req, res) => {
  const body = req.body;
  listaFilme.push(body);
  return res.json(listaFilme);
});

app.get('/movies', (req, res) => {
  const search = req.query;
  const resultSearch = listaFilme.filter((filme) => filme.nome == search.nome);
  return res.json(resultSearch);
});

app.listen(3000, () => console.log('Server listen to 0.0.0.0:3000'));
