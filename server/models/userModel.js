import mongoose from "mongoose";
// import validator from "validator";
// import dotenv from "dotenv";
// import crypto from "crypto";

// import bcrypt from "bcryptjs";
// import jwt from "jsonwebtoken";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please provide product name"],
    // maxLength: [30, "Cannot Exceed limit of 30 digits"],
    // minLength: [1, "Cannot be less than 1 digit"],
  },

  email: {
    type: String,
    required: [true, "Please provide product email"],
    unique: true,
    // validator: [validator.isEmail, "Please provide valid email"],
  },

  password: {
    type: String,
    required: [true, "Please provide product password"],
    // minLength: [6, "Cannot be less than 6 digit"],
    select: false,
  },

  ModelName: {
    type: String,
    default: "MODEL : 11011",
  },

  ModelId: {
    type: String,
    default: "629b03c22b77595eb5a67546",
  },

  //   avatar: {
  //     public_id: {
  //       type: String,
  //       required: [true],
  //     },
  //     url: {
  //       type: String,
  //       required: [true],
  //     },
  //   },

  //   role: {
  //     type: String,
  //     default: "user",
  //   },

  //   resetPasswordToken: String,
  //   resetPasswordExpires: Date,
});

export const userModel = mongoose.model("Users", userSchema);
