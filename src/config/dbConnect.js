import mongoose from "mongoose";

// Informar seu password aqui !!
mongoose.connect("mongodb+srv://juniorcoding:<password>@cluster0.au9ywkf.mongodb.net/alura-node?retryWrites=true&w=majority")

const db = mongoose.connection;

export default db;