import express from "express";
import {
  addThroughUrl,
  getAllData,
  getLatestData,
  getMoistureTime,
} from "../controllers/pmsController.js";

const router = express.Router();

router.route("/getAllData").get(getAllData);
router.route("/getLatestData").get(getLatestData);

router.route("/addThroughUrl/:id").get(addThroughUrl);

router.route("/getmoistureTime").get(getMoistureTime);

export default router;
