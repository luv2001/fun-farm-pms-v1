import express from "express";
import {
  addPMSdataThroughUrl,
  getAllData,
  getLatestPMSData,
  getMoistureTime,
} from "../controllers/pmsController.js";
import { getLoggedInUser } from "../middleware/userAuth.js";

const router = express.Router();

router.route("/getAllData").get(getAllData);
router.route("/getLatestPMSdata").get(getLatestPMSData);
router.route("/addPMSdataThroughUrl").get(addPMSdataThroughUrl);

export default router;
