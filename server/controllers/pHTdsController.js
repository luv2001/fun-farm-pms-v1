import catchAsyncError from "../middleware/catchAsyncError.js";
import { phTDSModel } from "../models/pHTDSModel.js";

export const getAllpHTDSData = catchAsyncError(async (req, res) => {
  const data = await phTDSModel.find();

  res.json({
    success: true,
    data,
  });
});

export const addpHTDSdataThroughUrl = catchAsyncError(async (req, res) => {
  const { pH, TDS, id } = req.query;

  const data = await phTDSModel.create({
    pH,
    TDS,
    user: id,
  });

  res.status(201).json(data);
});
