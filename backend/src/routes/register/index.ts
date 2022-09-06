import { Router } from "express";
import { register } from "./register";

const router = Router();

router.post("/", register);

export { router as registerRouter };
