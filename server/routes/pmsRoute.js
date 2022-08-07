import express from "express";
import {
  addpHTDSdataThroughUrl,
  getAllpHTDSData,
} from "../controllers/pHTdsController.js";
import {
  addMWLdataThroughUrl,
  getAllMWLData,
  getLatestMWLdata,
} from "../controllers/pmsController.js";

const router = express.Router();

router.route("/getAllMWLData").get(getAllMWLData);
router.route("/getLatestMWLdata").get(getLatestMWLdata);
router.route("/addMWLdataThroughUrl").get(addMWLdataThroughUrl);

router.route("/getAllpHTDSData").get(getAllpHTDSData);
router.route("/addpHTDSdataThroughUrl").post(addpHTDSdataThroughUrl);

export default router;
