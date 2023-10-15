import ErrorNotFound from "../erros/ErrorNotFound.js";

function notFoundMiddleware(req, res, next) {
 
  const erro404 = new ErrorNotFound();
  next(erro404);
}

export default notFoundMiddleware;