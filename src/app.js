import express from 'express'
import db from "./config/dbConnect.js"
import livros from './models/Livro.js';
import router from './routes/index.js';


//Monitorar algum erro na conexão
db.on("error", console.log.bind(console, 'Erro de conexão'));

db.once("open", () => {
    console.log('Conexão com o banco feita com sucesso')
});

const app = express()

// Colocando o content type e o recebimento dos objetos em JSON
//app.use(express.json());


router(app);


app.get('/livros', (req, res) => {
    livros.find((err, livros) => {
        res.status(200).json(livros)
    });
});

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