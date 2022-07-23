import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

import { config } from "dotenv";

config({ path: "../config/config.env" });

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();

  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

userSchema.methods.getJWTtoken = function () {
  const token = jwt.sign({ id: this._id }, process.env.JWT_SECRET, {
    expiresIn: process.env.EXPIRESIN,
  });
  return token;
};

userSchema.methods.comparepassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};
const userModel = mongoose.models.User || mongoose.model("User", userSchema);
export default userModel;
