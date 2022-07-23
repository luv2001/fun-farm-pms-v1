import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

import pmsRoute from "./routes/pmsRoute.js";
import userRoute from "./routes/userRoute.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use(cookieParser());

app.use("/api/v1/pms", pmsRoute);
app.use("/api/v1/user", userRoute);

export default app;
