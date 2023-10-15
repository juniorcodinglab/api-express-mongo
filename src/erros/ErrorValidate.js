import ErrorBase from "./ErrorBase.js";

class ErrorValidate extends ErrorBase {
  constructor(err) {
    const menssageError = Object.values(err.errors)
      .map((err => err.message))
      .join("; ");

    super(`Os seguintes erros foram encontrados: ${menssageError}`, 400);
  }
}

export default ErrorValidate;