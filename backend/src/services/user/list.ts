import { IUser, User } from "../../models/user";

export const list = async (): Promise<IUser[]> => {
  return await User.find({}).populate("movie");
};
