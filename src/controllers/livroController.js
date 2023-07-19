import livros from "../models/Livro.js";

class LivroController {

    static listarLivros = async (req, res) => {

        try {
            const meuLivros = await livros.find()
            res.status(200).json(meuLivros);
        } catch (err) {
            console.log(err);
            res.status(400).json({ error: 'Ocorreu um erro ao buscar os livros'});
        }
        livros.find((err, livros) => {
            res.status(200).json(livros)
        });
    }
}

export default LivroController