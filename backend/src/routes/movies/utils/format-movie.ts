import { IMovie } from "../../../models/movie";

export const formatMovie = (movie: IMovie): IMovie => {
  return {
    _id: movie._id,
    title: movie.title,
    duration: movie.duration,
    startDate: movie.startDate,
  };
};
