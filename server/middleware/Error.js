import ErrorHandler from "../utils/errorHandler.js";

export default (err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  err.message = err.message || "Internal Server Error";

  //   Wrong MongoDB Id error
  if (err.name === "CastError") {
    const message = `resource not found. Invalid : ${err.name}`;
    err = new ErrorHandler(message, 404);
  }
  // MONGO DB : Duplicate Key Error
  if (err.code === 11000) {
    const message = `Duplicate ${Object.keys(err.keyValue)} entered`;
    err = new ErrorHandler(message, 400);
  }

  //WRONG JWT error
  if (err.name === "JsonWebTokenError") {
    const message = `Invalid Token`;
    err = new ErrorHandler(message, 401);
  }

  //JWT Expired
  if (err.name === "TokenExpiredError") {
    const message = `Token has been expired`;
    err = new ErrorHandler(message, 401);
  }

  res.status(err.statusCode).json({
    success: false,
    message: err.message,
  });
};
