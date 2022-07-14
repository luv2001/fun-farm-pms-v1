import express from "express";
import cors from "cors";

import pmsRoute from "./routes/pmsRoute.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1", pmsRoute);

export default app;
