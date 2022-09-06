import { Movie } from "../../models/movie";

export const list = async () => {
  return await Movie.find({});
};
