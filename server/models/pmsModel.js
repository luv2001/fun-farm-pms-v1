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

  pH: {
    type: Number,
    default: 7.0,
    required: [true, "Please provide pH"],
  },
  TDS: {
    type: Number,
    default: 10.0,
    required: [true, "Please provide TDS"],
  },
  DLI: {
    type: Number,
    default: 10.0,
    required: [true, "Please provide DLI"],
  },

  // TODO : One More Field Water Level
});

autoIncrement.initialize(mongoose.connection);
pmsSchema.plugin(autoIncrement.plugin, "PMSModel");

export const pmsModel = mongoose.model("PMSModel", pmsSchema);
