import { Router } from "express";
import { list } from "./list";

const router = Router();

router.get("/users", list);

export { router as usersRouter };
