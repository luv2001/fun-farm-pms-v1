import mongoose from "mongoose";

//Wtemp=100&Atemp=100&Humidity=100

const pmsSchema = new mongoose.Schema({
  date: {
    type: Date,
    default: Date.now,
  },

  //TODO : pmsSchema.pre("save", function (next) {
  // this.time and this.date will be set

  moisture: {
    type: Number,
    default: 0,
  },

  waterLevel: {
    type: Number,
    default: 0,
  },

  LUX: {
    type: Number,
    default: 0,
  },

  Wtemp: {
    required: true,
    type: Number,
    default: 0,
  },

  Atemp: {
    required: true,
    type: Number,
    default: 0,
  },

  Humidity: {
    required: true,
    type: Number,
    default: 0,
  },

  user: {
    type: String,
    required: [true, "Please provide User"],
  },
});

export const pmsModel = mongoose.model("PMSModel", pmsSchema);
