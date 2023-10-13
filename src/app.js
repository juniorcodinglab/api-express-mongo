import express from "express";
import db from "./config/dbConnect.js";
import routes from "./routes/index.js"; 
import errorMiddleware from "./middlewares/errorMiddleware.js";

db.on("error", console.log.bind(console, "Erro de conexão"));
db.once("open", () => {
  console.log("conexão com o banco feita com sucesso");
});

const app = express();
app.use(express.json());

routes(app);

// Intercepta todo erro identificado na Aplicação
app.use(errorMiddleware);

export default app; 