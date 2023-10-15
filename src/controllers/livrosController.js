import ErrorNotFound from "../erros/ErrorNotFound.js";
import { autores, livros } from "../models/index.js";

class LivroController {

  static listarLivros = async (req, res, next) => {

    try {
      const searchBook = livros.find();

      req.result = searchBook;

      next(); // Execulta o proximo middleware da rota....
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
        next(new ErrorNotFound("Id do Autor não localizado."));
    
    } catch (err) {
      next(err);
    }
  };

  static listarLivroPorFiltro = async (req, res, next) => {

    try {
      const { editora, titulo, minPaginas, maxPaginas, nomeAutor } = req.query;
      let search = {};

      if(minPaginas || maxPaginas) search.numeroPaginas = { };

      if(editora) search.editora = editora;
      if(titulo) search.titulo = { $regex: titulo, $options: "i"};

      if(minPaginas) search.numeroPaginas.$gte = minPaginas;
      if(maxPaginas) search.numeroPaginas.$lte = maxPaginas;

      if(nomeAutor) {
        const resultAutor = await autores.findOne({ nome: nomeAutor});

        if(resultAutor !== null) {
          search.autor = resultAutor._id;
        } else {
          search = null;
        }
      }

      if(search !== null) {
        const resultBooksByFiltro = await livros.find(search).populate("autor");  
        res.status(200).send(resultBooksByFiltro);
      } else {
        res.status(200).send([]);
      } 
    } catch (err) {
      next(err);
    }
  };

  static cadastrarLivro = async (req, res, next) => {
    try {
      const livro = new livros(req.body);

      const resultBook = await livro.save();

      res.status(201).send(resultBook.toJSON());
    } catch (err) {
      next(err);
    }
  };

  static atualizarLivro = async (req, res, next) => {
    const id = req.params.id;

    try {
      const resultBook = await livros.findByIdAndUpdate(id, {$set: req.body});

      if(resultBook !== null) {
        res.status(200).send({message: "Livro atualizado com sucesso"});
      } else {
        next(new ErrorNotFound("Id do livro não localizado."));
      }
    } catch (err) {
      next(err);
    }
  };

  static excluirLivro = async (req, res, next) => {
    const id = req.params.id;

    try {
      const resultBook = await livros.findByIdAndDelete(id);

      if(resultBook !== null) {
        res.status(200).send({message: "Livro removido com sucesso"});
      } else {
        next(new ErrorNotFound("Id do livro não localizado."));
      }
    } catch (err) {
      next(err);
    }
  };
}

export default LivroController;