import express from "express";
import cors from "cors";
import { config } from "dotenv";

config({ path: "./config/config.env" });

import app from "./app.js";

import connectToDatabase from "./config/database.js";

connectToDatabase();

app.listen(process.env.PORT, () => {
  console.log(`Server is listening on port ${process.env.PORT}`);
});
