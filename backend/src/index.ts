import express from "express";
import router from "./routes";

const PORT = 3001;

const app = express();

app.use(express.json());

app.use(router);

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});