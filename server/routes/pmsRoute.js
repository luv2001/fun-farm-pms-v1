import express from "express";
import {
  addPMSdataThroughUrl,
  getAllData,
  getLatestPMSData,
  getMoistureTime,
} from "../controllers/pmsController.js";

const router = express.Router();

router.route("/getAllData").get(getAllData);
router.route("/getLatestPMSdata").get(getLatestPMSData);
router.route("/addPMSdataThroughUrl").get(addPMSdataThroughUrl);

// router.route("/getmoistureTime").get(getMoistureTime);

export default router;
