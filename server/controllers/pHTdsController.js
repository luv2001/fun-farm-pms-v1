import catchAsyncError from "../middleware/catchAsyncError.js";
import { phTDSModel } from "../models/pHTDSModel.js";

export const getAllpHTDSData = catchAsyncError(async (req, res) => {
  const data = await phTDSModel.find();

  res.json({
    success: true,
    data,
  });
});

export const getLatestpHTDSData = async (req, res) => {
  try {
    const { id } = req.query;

    const data = await phTDSModel.find({
      user: id,
    });
    const productsCount = await phTDSModel.countDocuments({
      user: id,
    });

    const latestData = data[productsCount - 1];

    if (!latestData) {
      return res.json({
        success: false,
        message: "No data found",
      });
    }

    const time = new Date(latestData.date).toLocaleTimeString(undefined, {
      hour12: false,
      timeZone: "Asia/Kolkata",
    });

    // TODO : Implimenting Utils funtion for date and time

    // Reusable Date and Time Component
    const formatingdate = new Date(latestData.date);
    const year = formatingdate.getFullYear();
    const month = latestData.date.getMonth() + 1;
    const dt = latestData.date.getDate();
    const formattedDate = dt + "/" + month + "/" + year;

    const latestDataFormatted = [
      formattedDate,
      time,
      latestData.pH,
      latestData.TDS,
    ];

    res.json(latestDataFormatted);
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const addpHTDSdataThroughUrl = catchAsyncError(async (req, res) => {
  const { pH, TDS, id } = req.query;

  const data = await phTDSModel.create({
    pH,
    TDS,
    user: id,
  });

  res.status(201).json(data);
});
