import express from 'express';
import livros from "./livrosRoutes.js";

const routes = (app) => {
    // Rota para teste
    app.route('/').get((req, res) => {
        res.status(200).send({titulo: "Curso de node"})
    });

    // Informanando que o Express irá trabalhar com JSON e juntando com as rotas do livros
    app.use(
        express.json(),
        livros
    )
}

export default routes;