import { Router } from "express";
import { registerRouter } from "./register";
import { moviesRouter } from "./movies";
import { usersRouter } from "./users";

const router = Router();

router.use("/movies", moviesRouter);
router.use("/register", registerRouter);
router.use("/users", usersRouter);

export default router;
