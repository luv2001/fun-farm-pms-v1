import { pmsModel } from "../models/pmsModel.js";

export const getAllData = async (req, res) => {
  try {
    const data = await pmsModel.find();

    res.json({
      success: true,
      data: data,
    });
  } catch (error) {
    console.log(error);
    res.json({
      success: false,
      message: error.message,
    });
  }
};

export const getMoistureTime = async (req, res) => {
  try {
    const data = await pmsModel.find();

    //create new array of data.moisture element
    const moistureArray = data.map((item) => item.moisture);

    //create Time array using time modified alignItems
    const timeArray = [];
    data.map((item) => {
      const time = new Date(item.date).toLocaleTimeString(undefined, {
        hour12: false,
        timeZone: "Asia/Kolkata",
      });
      timeArray.push(time);
    });

    const graphData = [];

    data.map((item) => {
      const time = new Date(item.date).toLocaleTimeString(undefined, {
        hour12: false,
        timeZone: "Asia/Kolkata",
      });
      const moisture = item.moisture;
      const moistureTimeObject = {
        moisture: moisture,
        time: time,
      };
      graphData.push(moistureTimeObject);
    });

    res.json({
      success: true,
      data: graphData,
    });
  } catch (error) {
    console.log(error);
    res.json({
      success: false,
      message: error.message,
    });
  }
};

export const getLatestData = async (req, res) => {
  try {
    const data = await pmsModel.find();
    const productsCount = await pmsModel.countDocuments();
    const latestData = data[productsCount - 1];

    if (!latestData) {
      return res.json({
        success: false,
        message: "No data found",
      });
    }

    const moisture = latestData.moisture;
    const date = latestData.date;
    const newDate = new Date(date).toLocaleString(undefined, {
      timeZone: "Asia/Kolkata",
    });
    const time = new Date(date).toLocaleTimeString(undefined, {
      hour12: false,
      timeZone: "Asia/Kolkata",
    });
    const formatingdate = new Date(date);
    const year = formatingdate.getFullYear();
    const month = date.getMonth() + 1;
    const dt = date.getDate();
    const formattedDate = dt + "/" + month + "/" + year;

    // TODO : This is Hard Coded pH TDS DLI
    const pH = latestData.pH;
    const TDS = latestData.TDS;
    const DLI = latestData.DLI;

    const newFormattedData = [formattedDate, time, moisture, pH, TDS, DLI];

    res.json(newFormattedData);
  } catch (error) {
    console.log(error);
    res.json({
      message: error.message,
    });
  }
};

export const createNewData = async (req, res) => {
  const moisture = req.params.id;

  const data = await pmsModel.create({
    moisture,
  });

  res.json({
    success: true,
    data,
  });
};

export const addThroughUrl = async (req, res) => {
  const moisture = req.params.id;

  const data = await pmsModel.create({
    moisture,
  });

  res.json({
    success: true,
    data,
  });
};
