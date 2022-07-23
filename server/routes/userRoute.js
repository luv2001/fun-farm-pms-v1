import express from "express";
import { SignIn, SignUp } from "../controllers/userControllers.js";
import { getLoggedInUser } from "../middleware/userAuth.js";

const router = express.Router();

router.route("/signup").post(SignUp);
router.route("/signin").post(SignIn);

export default router;
