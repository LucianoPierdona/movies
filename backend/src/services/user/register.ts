import { Types } from "mongoose";
import { Movie } from "../../models/movie";
import { IUser, User } from "../../models/user";

export interface IRegisterUser extends IUser {
  movieId: Types.ObjectId;
}

export const register = async (attrs: IRegisterUser) => {
  const movie = await Movie.findById(attrs.movieId);

  if (!movie) {
    throw new Error("Movie not found");
  }

  Object.assign(attrs, { movie });

  return User.build(attrs).save();
};
