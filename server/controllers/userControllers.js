import userModel from "../models/userModel.js";
import ErrorHandler from "../utils/errorHandler.js";
import catchAsyncErrors from "../middleware/catchAsyncError.js";
import { sendToken } from "../utils/jwtToken.js";

export const SignUp = catchAsyncErrors(async (req, res, next) => {
  const { name, email, password } = req.body;

  const user = await userModel.create({
    name,
    email,
    password,
  });

  sendToken(user, 201, res);
});

export const SignIn = catchAsyncErrors(async (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return next(new ErrorHandler("Please Provide email and password", 400));
  }

  const user = await userModel.findOne({ email: email }).select("+password");

  if (!user) {
    return next(new ErrorHandler("Invalid email aur password", 401));
  }

  const isPasswordMatched = await user.comparepassword(password);

  if (!isPasswordMatched) {
    return next(new ErrorHandler("Invalid email aur password", 401));
  }

  sendToken(user, 200, res);
});
