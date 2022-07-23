import mongoose from "mongoose";

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

  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: [true, "Please provide User"],
  },
});

export const phTDSModel = mongoose.model("phTDSModel", phTDSSchema);
