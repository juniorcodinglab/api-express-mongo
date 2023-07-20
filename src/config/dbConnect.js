import mongoose from "mongoose";
import * as dotenv from 'dotenv'
dotenv.config()

const mongoURI = process.env.MONGODB_URI || '';


mongoose.connect(mongoURI)

const db = mongoose.connection;

export default db;