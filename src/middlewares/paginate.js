import ErrorRequest from "../erros/ErrorRequest.js";

async function paginate(req, res, next) {
  try {
    const result = req.result;

    let { limit = 5, page = 1, sort = "_id:1" } = req.query;
    let [sortField, sortOrder] = sort.split(":");

    limit = parseInt(limit);
    page = parseInt(page);
    sortOrder = parseInt(sortOrder);

    if(limit > 0 && page > 0) {
      const resultPaginate = await result.find()
        .sort({ [sortField]: sortOrder })
        .skip((page - 1) * limit)
        .limit(limit)
        .exec();

      res.status(200).send(resultPaginate);
    } else {
      next(new ErrorRequest());
    }
  } catch (err) {
    next(err);
  }
}

export default paginate;