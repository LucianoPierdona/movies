import { Movie } from "../../models/movie";
import { RAW_MOVIE } from "../../test/fixtures/movie";
import { list } from "./list";

describe("list", () => {
  it("should successfully list movies", async () => {
    const findSpy = jest.spyOn(Movie, "find").mockResolvedValue([RAW_MOVIE]);

    const movies = await list();

    expect(movies.length).toEqual(1);
    expect(movies[0]).toEqual(RAW_MOVIE);

    expect(findSpy).toHaveBeenCalledWith({});
    expect(findSpy).toHaveBeenCalledTimes(1);
  });
});
