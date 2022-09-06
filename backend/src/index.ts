import express from "express";
import mongoose from "mongoose";
import { runSeed } from "./fixtures/run-seed";
import router from "./routes";

const PORT = 3001;

const app = express();

app.use(express.json({ limit: "50mb" }));

app.use(router);

mongoose.connect(
  "mongodb+srv://testlets:txpvxGveHklUUXdY@cluster0.37fbyz5.mongodb.net/movies?retryWrites=true&w=majority",
  {},
  () => {
    console.log("connected to database");
    runSeed();
  }
);

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
