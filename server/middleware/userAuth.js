import jwt from "jsonwebtoken";
import userModel from "../models/userModel.js";
import ErrorHandler from "../utils/errorHandler.js";

export const getLoggedInUser = async (req, res, next) => {
  const { token } = req.cookies;
  console.log(token);

  if (!token) {
    return next(new ErrorHandler("Please login to access this resources", 401));
  }

  const decodedData = jwt.verify(token, process.env.JWT_SECRET);

  req.user = await userModel.findById(decodedData.id);

  next();
};
