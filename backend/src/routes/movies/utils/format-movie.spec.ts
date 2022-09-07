import { MOVIE, RAW_MOVIE } from "../../../test/fixtures/movie";
import { formatMovie } from "./format-movie";

describe("formatMovie", () => {
  it("should format a movie", () => {
    const fomattedMovie = formatMovie(RAW_MOVIE as any);

    expect(fomattedMovie).toEqual(MOVIE);
  });
});
