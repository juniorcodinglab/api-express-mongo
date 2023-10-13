import livros from "../models/Livro.js";

class LivroController {

  static listarLivros = async (req, res, next) => {

    try {
      const resultBook = await livros.find()
        .populate("autor");

      res.status(200).send(resultBook);
    
    } catch (err) {
      next(err);
    }
  };

  static listarLivroPorId = async (req, res, next) => {
    const id = req.params.id;

    try {
      const resultBook = await livros.findById(id)
        .populate("autor", "nome");

      if(resultBook !== null) 
        res.status(200).send(resultBook);
      else
        res.status(400).send({message: "Id do livro não localizado."});
    
    } catch (err) {
      next(err);
    }
  };

  static cadastrarLivro = async (req, res, next) => {
    try {
      const livro = await new livros(req.body);

      livro.save();

      res.status(201).send(livro.toJSON());
    } catch (err) {
      next(err);
    }
  };

  static atualizarLivro = async (req, res, next) => {
    const id = req.params.id;

    try {
      await livros.findByIdAndUpdate(id, {$set: req.body});

      res.status(200).send({message: "Livro atualizado com sucesso"});

    } catch (err) {
      next(err);
    }
  };

  static excluirLivro = async (req, res, next) => {
    const id = req.params.id;

    try {
      await livros.findByIdAndDelete(id);

      res.status(200).send({message: "Livro removido com sucesso"});
    } catch (err) {
      next(err);
    }
  };

  static listarLivroPorEditora = async (req, res, next) => {
    const editora = req.query.editora;

    try {
      const resultBooksByEdidora = await livros.find({"editora": editora}, {});
      res.status(200).send(resultBooksByEdidora);
    
    } catch (err) {
      next(err);
    }
  };
}

export default LivroController;