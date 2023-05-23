import logger from "../app.js"

const errorHandler = (err, req, res, next) => {
  logger.error(err);
  return res.status(500).send({ success: false, message: err.message });
};

export default errorHandler;