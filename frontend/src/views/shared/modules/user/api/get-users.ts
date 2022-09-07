import { User } from "../model";
import axios from "axios";

export const getUsers = async (): Promise<User[]> => {
  const { data: users } = await axios.get(
    `${process.env.REACT_APP_BACKEND_URL}/users`
  );

  return users;
};
