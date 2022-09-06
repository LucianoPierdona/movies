import { Router } from "express";
import { registerRouter } from "./register";
import { moviesRouter } from "./movies";

const router = Router();

router.use("/movies", moviesRouter);
router.use("/auth", registerRouter);

export default router;
