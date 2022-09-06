import "dotenv/config";
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import { runSeed } from "./fixtures/run-seed";
import router from "./routes";

const PORT = process.env.PORT || 3001;

const app = express();

app.use(cors());

app.use(express.json({ limit: "50mb" }));

app.use(router);

mongoose.connect(process.env.MONGODB_URL!, {}, () => {
  console.log("connected to database");
  runSeed();
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
