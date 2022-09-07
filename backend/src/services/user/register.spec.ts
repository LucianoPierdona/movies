import { Movie } from "../../models/movie";
import { User } from "../../models/user";
import { RAW_MOVIE } from "../../test/fixtures/movie";
import { RAW_USER } from "../../test/fixtures/user";
import { register } from "./register";

describe("register", () => {
  it("should successfully register a user", async () => {
    const movieFindByIdSpy = jest
      .spyOn(Movie, "findById")
      .mockResolvedValue(RAW_MOVIE);
    const buildSpy = jest.spyOn(User, "build").mockImplementation(
      () =>
        ({
          save: jest.fn().mockResolvedValue(RAW_USER),
        } as any)
    );

    const request = {
      firstName: RAW_USER.firstName,
      lastName: RAW_USER.lastName,
      email: RAW_USER.email,
      avatarBase64: RAW_USER.avatarBase64,
      phone: RAW_USER.phone,
      sitRow: RAW_USER.sitRow,
      sitPlace: RAW_USER.sitPlace,
      movieId: RAW_USER.movie._id as any,
    };

    const user = await register(request);

    expect(user).toEqual(RAW_USER);

    expect(movieFindByIdSpy).toHaveBeenCalledWith(RAW_USER.movie._id);
    expect(movieFindByIdSpy).toHaveBeenCalledTimes(1);

    expect(buildSpy).toHaveBeenCalledWith({
      ...request,
      movie: RAW_MOVIE,
    });
    expect(buildSpy).toHaveBeenCalledTimes(1);
  });

  it("should throw an error if movie not found", async () => {
    const movieFindByIdSpy = jest
      .spyOn(Movie, "findById")
      .mockResolvedValue(null);

    const request = {
      firstName: RAW_USER.firstName,
      lastName: RAW_USER.lastName,
      email: RAW_USER.email,
      avatarBase64: RAW_USER.avatarBase64,
      phone: RAW_USER.phone,
      sitRow: RAW_USER.sitRow,
      sitPlace: RAW_USER.sitPlace,
      movieId: RAW_USER.movie._id as any,
    };

    let error;
    let result;

    try {
      result = await register(request);
    } catch (err) {
      error = err;
    }

    expect(result).toBeUndefined();

    expect(error instanceof Error).toBeTruthy();
    expect(error).toEqual(new Error("Movie not found"));

    expect(movieFindByIdSpy).toHaveBeenCalledWith(RAW_USER.movie._id);
    expect(movieFindByIdSpy).toHaveBeenCalledTimes(2);
  });
});
