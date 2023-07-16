import mongoose from "mongoose";

const livrosSchema = new mongoose.Schema({
    id: { type: String },
    titulo: { type: String, required: true },
    autor: { type: String, required: true},
    editora: { type: String, required: true},
    numeroPags: { type: Number},
});

// Criando a coleção ou definindo a coleção já existente 
const livros = mongoose.model('livros', livrosSchema);

export default livros;