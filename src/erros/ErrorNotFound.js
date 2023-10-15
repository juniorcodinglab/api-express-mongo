import ErrorBase from "./ErrorBase.js";

class ErrorNotFound extends ErrorBase {
  constructor(menssage = "Página não encontrada."){
    super(menssage, 404);
  }
}

export default ErrorNotFound;