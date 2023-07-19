import mongoose from "mongoose";

mongoose.connect("mongodb+srv://juniorcoding:ftH0QCDqxyB7LvE8@cluster0.au9ywkf.mongodb.net/alura-node?retryWrites=true&w=majority")

const db = mongoose.connection;

export default db;