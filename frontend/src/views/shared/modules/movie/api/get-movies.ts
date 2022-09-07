import axios from "axios";
import { Movie } from "../model";

export const getMovies = async (): Promise<Movie[]> => {
  const { data: movies } = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/movies`);

  return movies;
};
