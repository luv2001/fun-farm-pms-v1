import mongoose from "mongoose";
import autoIncrement from "mongoose-auto-increment";

const DLISchema = new mongoose.Schema({
  date: {
    type: Date,
    default: Date.now,
  },
  DLI: {
    type: Number,
    default: 100,
  },
});

autoIncrement.initialize(mongoose.connection);
DLISchema.plugin(autoIncrement.plugin, "DLIModel");

export const DLIModel = mongoose.model("DLIModel", DLISchema);
