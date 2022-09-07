import { Router } from "express";
import { validate } from "../../middlewares/validate";
import { register } from "./register";
import { registerValidator } from "./validators/register.validator";

const router = Router();

router.post("/", validate(registerValidator), register);

export { router as registerRouter };
