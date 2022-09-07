import { Request, Response } from "express";

import { register as registerUser } from "../../services/user";
import { formatUser } from "../users/utils/format-user";

export const register = async (req: Request, res: Response) => {
  const user = await registerUser(req.body);

  return res.status(201).send(formatUser(user));
};
