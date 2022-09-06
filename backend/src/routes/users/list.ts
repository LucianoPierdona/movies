import { Request, Response } from "express";
import { list as listUsers } from "../../services/user";

export const list = async (req: Request, res: Response) => {
  const users = await listUsers();

  return res.status(200).send(users);
};
