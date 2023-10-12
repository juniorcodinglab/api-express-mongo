import mongoose from "mongoose";
import autores from "../models/Autor.js";

class AutorController {

  static listarAutores = async (req, res) => {

    try {
      const resultAuthor = await autores.find();

      if(resultAuthor !== null) {
        res.status(200).json(resultAuthor);
      } else {
        res.status(404).json("Não há nenhum autor registrado");
      }
    } catch (err) {
      res.status(500).json({ message: "Erro interno no servidor" });
    }
  };

  static listarAutorPorId = async (req, res) => {
    try {
      const id = req.params.id;

      const resultAuthor = await autores.findById(id);

      if(resultAuthor !== null) {
        res.status(200).send(resultAuthor);
      } else {
        res.status(404).send({ message: "Id do Autor não localizado." });
      }
    } catch (err) {

      if(err instanceof mongoose.Error.CastError) {
        res.status(400).send({ message: "Um ou mais dados fornecidos estão incorretos." });
      } else {
        res.status(500).send({ message: "Erro interno no servidor" });
      }
    }
  };  

  static cadastrarAutor = async (req, res) => {
    try {
      const author = await new autores(req.body);

      author.save();

      res.status(201).send(author.toJSON());
    } catch (err) {
      res.status(500).send({message: `${err.message} - falha ao cadastrar Autor.`});
    }
  };

  static atualizarAutor = async (req, res) => {
    try {
      const id = req.params.id;

      await autores.findByIdAndUpdate(id, {$set: req.body});

      res.status(200).send({message: "Autor atualizado com sucesso"});
    } catch (err) {
      res.status(500).send({message: err.message});
    }
  };

  static excluirAutor = async (req, res) => {
    try {
      const id = req.params.id;

      await autores.findByIdAndDelete(id);

      res.status(200).send({message: "Autor removido com sucesso"});
    } catch (err) {
      res.status(500).send({message: err.message});
    }
  };

}

export default AutorController;