import axios from "axios";
import { Movie } from "../model";

export const getMovies = async (): Promise<Movie[]> => {
  const { data: movies } = await axios.get("http://localhost:3001/movies");

  return movies;
};
