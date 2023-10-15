import ErrorBase from "./ErrorBase.js";

class ErrorRequest extends ErrorBase {
  constructor(menssage = "Um ou mais dados fornecidos estão incorretos") {
    super(menssage, 400);
  }
}

export default ErrorRequest;