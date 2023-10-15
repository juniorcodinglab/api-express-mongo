import ErrorNotFound from "../erros/ErrorNotFound.js";
import { autores } from "../models/index.js";

class AutorController {

  static listarAutores = async (req, res, next) => {

    try {
      const resultAuthor = await autores.find();

      if(resultAuthor !== null) {
        res.status(200).json(resultAuthor);
      } else {
        res.status(404).json("Não há nenhum autor registrado");
      }
    } catch (err) {
      next(err);
    }
  };

  static listarAutorPorId = async (req, res, next) => {
    try {
      const id = req.params.id;

      const resultAuthor = await autores.findById(id);

      if(resultAuthor !== null) {
        res.status(200).send(resultAuthor);
      } else {
        next(new ErrorNotFound("Id do Autor não localizado."));
      }
    } catch (err) {
      next(err);
    }
  };  

  static cadastrarAutor = async (req, res, next) => {
    try {
      const author = new autores(req.body);
      const authorResult = await author.save();

      res.status(201).send(authorResult.toJSON());
    } catch (err) {
      next(err);
    }
  };

  static atualizarAutor = async (req, res, next) => {
    try {
      const id = req.params.id;

      const authorResult = await autores.findByIdAndUpdate(id, {$set: req.body});

      if(authorResult == null) {
        next(new ErrorNotFound("Id do Autor não localizado."));
      } else {
        res.status(200).send({message: "Autor atualizado com sucesso"});
      }
    } catch (err) {
      next(err);
    }
  };

  static excluirAutor = async (req, res, next) => {
    try {
      const id = req.params.id;

      const authorResult = await autores.findByIdAndDelete(id);

      if(authorResult == null) {
        next(new ErrorNotFound("Id do Autor não localizado."));
      } else {
        res.status(200).send({message: "Autor removido com sucesso"});
      }
    } catch (err) {
      next(err);
    }
  };
}

export default AutorController;