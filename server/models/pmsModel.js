import mongoose from "mongoose";
import autoIncrement from "mongoose-auto-increment";

const pmsSchema = new mongoose.Schema({
  date: {
    type: Date,
    default: Date.now,
  },

  //TODO : pmsSchema.pre("save", function (next) {
  // this.time and this.date will be set

  moisture: {
    type: Number,
    required: [true, "Please provide Moisture"],
  },

  waterLevel: {
    type: Number,
    default: 75,
    // required: [true, "Please provide Water Level"],
  },

  LUX: {
    type: Number,
    default: 10,
    // required: [true, "Please provide Water Level"],
  },
});

autoIncrement.initialize(mongoose.connection);
pmsSchema.plugin(autoIncrement.plugin, "PMSModel");

export const pmsModel = mongoose.model("PMSModel", pmsSchema);
