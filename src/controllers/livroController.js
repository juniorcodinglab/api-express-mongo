import livros from "../models/Livro.js";

class LivroController {

    static listarLivros = async (req, res) => {
        livros.find((err, livros)
            .populate('autor')
            .exec((err, livros) => {
                res.status(200).json(livros)
            })
        );
    }

    static getLivrosById = async (req, res) => {
        const { id } = req.params;

        livros.findById(id, (err, livros) => {
            if(err) {
                res.status(400).send({ message: `${err.message} id do livro não localizado.` });
            } else {
                res.status(200).send(livros);
            }
        })

        livros.find((err, livros) => {
            res.status(200).json(livros)
        });
    }

    static cadastrarLivro = async (req, res) => {
        const livro = new livros(req.body);

        livro.save((err) => {
            if (err) {
                res.status(400).send({message: `${err.message} - falha ao cadastrar livro`})
            } else {
                res.status(201).send(livro.toJSON());
            }
        })
    }

    static atualizarLivro = async (req, res) => {
        const id = req.params.id;

        livros.findByIdAndUpdate(id, {
            $set: req.body
        }, (err) => {
            if(!err) {
                res.status(200).send({ message: "Livro atualizado com sucesso"});
            } else {
                res.status(400).send({ message: err.message});
            }
        })
    }

    static excluirLivro = async (req, res) => {
        const { id } = req.params;

        livros.findByIdAndDelete(id, (err) => {
            if(!err) {
                res.status(200).send({ message: "Livro removido com sucesso"});
            } else {
                res.status(500).send({ message: err.message });
            }
        });
    }
}

export default LivroController