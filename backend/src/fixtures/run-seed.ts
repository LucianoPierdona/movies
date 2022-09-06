import { Movie } from "../models/movie";
import { movies } from "./movies";

export const runSeed = async () => {
  const savedMovies = await Movie.count();

  if (savedMovies > 0) return;

  await Promise.all(
    movies.map(async ({ duration, startDate, title }) => {
      const created = Movie.build({
        title,
        duration,
        startDate,
      });

      await created.save();
    })
  );
};
