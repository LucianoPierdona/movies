import { Request, Response } from "express";
import { list as listMovies } from "../../services/movies";
import { formatMovie } from "./utils/format-movie";

export const list = async (req: Request, res: Response) => {
  const movies = await listMovies();

  return res.status(200).send(movies.map(formatMovie));
};
