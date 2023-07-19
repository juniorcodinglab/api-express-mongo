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

app.get('/livros/:id', (req, res) => {
    let index = searchBook(req.params.id);

    res.json(livros[index])
})

app.delete('/livros/:id', (req, res) => {
    const { id } = req.params;
    const index = searchBook(id);

    livros.splice(index, 1);

    res.send(`Livro ${id} apagado com sucesso`);
})


export default app