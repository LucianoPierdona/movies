import { IUser } from "../../../models/user";
import { formatMovie } from "../../movies/utils/format-movie";

export const formatUser = (user: IUser): IUser => {
  return {
    _id: user._id,
    email: user.email,
    firstName: user.firstName,
    lastName: user.lastName,
    phone: user.phone,
    sitPlace: user.sitPlace,
    sitRow: user.sitRow,
    ...(user.movie && {
      movie: formatMovie(user.movie),
    }),
    avatarBase64: user.avatarBase64,
  };
};
