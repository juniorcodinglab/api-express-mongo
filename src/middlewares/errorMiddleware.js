import mongoose from "mongoose";
import ErrorBase from "../erros/ErrorBase.js";
import ErrorRequest from "../erros/ErrorRequest.js";
import ErrorValidate from "../erros/ErrorValidate.js";

// eslint-disable-next-line no-unused-vars
function errorMiddleware(err, req, res, next) {

  if(err instanceof mongoose.Error.CastError) {
    new ErrorRequest().enviarResposta(res);
  } else if(err instanceof mongoose.Error.ValidationError) {
    new ErrorValidate(err).enviarResposta(res);
  } else if(err instanceof ErrorBase) {
    err.enviarResposta(res);
  } else {
    new ErrorBase().enviarResposta(res);
  }
}

export default errorMiddleware;