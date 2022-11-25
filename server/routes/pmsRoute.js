import express from "express";
import {
  addpHTDSdataThroughUrl,
  getAllpHTDSData,
  getLatestpHTDSData,
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
router.route("/addpHTDSdataThroughUrl").get(addpHTDSdataThroughUrl);
router.route("/getLatestpHTDSData").get(getLatestpHTDSData);

export default router;
