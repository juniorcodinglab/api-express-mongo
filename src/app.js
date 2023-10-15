import express from "express";
import db from "./config/dbConnect.js";
import routes from "./routes/index.js"; 
import errorMiddleware from "./middlewares/errorMiddleware.js";
import notFoundMiddleware from "./middlewares/notFoundMiddleware.js";

db.on("error", console.log.bind(console, "Erro de conexão"));
db.once("open", () => {
  console.log("conexão com o banco feita com sucesso");
});

const app = express();
app.use(express.json());

routes(app);

// Intercepta quando o Express não identifica nenhuma rota na requisição
app.use(notFoundMiddleware);

// Intercepta todo erro identificado na Aplicação
app.use(errorMiddleware);

export default app; 