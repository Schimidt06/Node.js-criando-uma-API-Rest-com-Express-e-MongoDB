import express from 'express';

const app = express();
app.use(express.json());

const livros = [
    {
        id: 1,
        titulo: "Livro 1",

    },
    {
        id: 2,
        titulo: "Livro 2",
        
    }
]

function buscarLivro(id) {
    return livros.find(l => l.id === id);
}
app.get('/', (req, res) => {
    res.status(200).send('Cursando Express API');
});

app.get('/livros', (req, res) => {
    res.status(200).json(livros);
});

app.get('/livros/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const livro = livros.find(l => l.id === id);
    res.status(200).json(livro);
});

app.post('/livros', (req, res) => {
   livros.push(req.body);
    res.status(201).send('Livro adicionado com sucesso');
});



export default app;