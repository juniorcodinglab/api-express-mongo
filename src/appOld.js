import express from 'express'
import db from "./config/dbConnect.js"


//Monitorar algum err
//db.on("error", console.log.bind(console, 'Erro de conexão'));
//db.once()


const app = express()

// Colocando o content type e o recebimento dos objetos em JSON
app.use(express.json());

const livros = [
    { id: 1, "titulo": "Senhor dos Aneis"},
    { id: 2, "titulo": "Vingadores"}
]

app.get('/', (req, res) => {
    res.status(200).send('Curso de Node');
})

app.get('/livros', (req, res) => {
    res.status(200).json(livros)
})

app.get('/livros/:id', (req, res) => {
    let index = searchBook(req.params.id);

    res.json(livros[index])
})

app.post('/livros', (req, res) => {
    // Pegando o Body da aplicação e colocando no array
    livros.push(req.body); 
})

app.put('/livros/:id', (req, res) => {
    let index = searchBook(req.params.id);
    const { titulo } = req.body;

    livros[index].titulo = titulo;

    res.json(livros);
})

app.delete('/livros/:id', (req, res) => {
    const { id } = req.params;
    const index = searchBook(id);

    livros.splice(index, 1);

    res.send(`Livro ${id} apagado com sucesso`);
})


function searchBook(id) {
    return livros.findIndex(livro => livro.id == id);
}

export default app