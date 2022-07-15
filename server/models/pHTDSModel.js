import mongoose from "mongoose";
import autoIncrement from "mongoose-auto-increment";

const phTDSSchema = new mongoose.Schema({
  date: {
    type: Date,
    default: Date.now,
  },
  pH: {
    type: Number,
    default: 7,
  },
  TDS: {
    type: Number,
    default: 17,
  },
});

autoIncrement.initialize(mongoose.connection);
phTDSSchema.plugin(autoIncrement.plugin, "phTDSModel");

export const phTDSModel = mongoose.model("phTDSModel", phTDSSchema);
