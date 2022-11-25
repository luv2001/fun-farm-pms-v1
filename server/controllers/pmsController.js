import catchAsyncError from "../middleware/catchAsyncError.js";
import { pmsModel } from "../models/pmsModel.js";

// TODO : Replacing This trycatch with catchAsyncErrors
// TODO : Replacing request responce with Errorhandling(code , message)
// TODO : Implimenting res status code with comments
// TODO : res status code built in functions in utils or any other using OOPS

export const getAllMWLData = async (req, res) => {
  try {
    const { id } = req.query;

    const data = await pmsModel.find({
      user: id,
    });
    res.json({
      success: true,
      data,
    });
  } catch (error) {
    res.json({
      success: false,
      message: error.message,
    });
  }
};

//TODO : (Simplicity) Rather implment charts on frount end using all data
export const getMoistureTime = async (req, res) => {
  try {
    const { data } = await pmsModel.find();

    res.json({
      success: true,
      data,
    });
  } catch (error) {
    res.json({
      success: false,
      message: error.message,
    });
  }
};

export const getLatestMWLdata = async (req, res) => {
  try {
    const { id } = req.query;

    const data = await pmsModel.find({
      user: id,
    });
    const productsCount = await pmsModel.countDocuments({
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
      latestData.moisture,
      latestData.waterLevel,
      latestData.LUX,
      latestData.Wtemp,
      latestData.Atemp,
      latestData.Humidity,
    ];

    res.json(latestDataFormatted);
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const addMWLdataThroughUrl = catchAsyncError(async (req, res) => {
  const { moisture, waterLevel, LUX, id, Wtemp, Atemp, Humidity } = req.query;

  const data = await pmsModel.create({
    moisture: moisture,
    waterLevel: waterLevel,
    LUX: LUX,
    user: id,
    Wtemp: Wtemp,
    Atemp: Atemp,
    Humidity: Humidity,
  });

  res.status(201).json(data);
});
