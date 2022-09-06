import { User } from "../model";
import axios from "axios";

export const getUsers = async (): Promise<User[]> => {
  const { data: users } = await axios.get("http://localhost:3001/users");

  return users;
};
