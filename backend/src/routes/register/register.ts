import { Request, Response } from "express";

import { register as registerUser } from "../../services/user";

export const register = async (req: Request, res: Response) => {
  const created = await registerUser(req.body);

  return res.status(201).send(created);
};
