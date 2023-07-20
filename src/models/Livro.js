import mongoose from "mongoose";

const livrosSchema = new mongoose.Schema({
    id: { type: String },
    titulo: { type: String, required: true },
    // Especificando que o autor será um ID da collection autores
    autor: { type: mongoose.Schema.Types.ObjectId, ref: 'autores', required: true},
    editora: { type: String, required: true},
    numeroPags: { type: Number},
});

// Criando a coleção ou definindo a coleção já existente 
const livros = mongoose.model('livros', livrosSchema);

export default livros;