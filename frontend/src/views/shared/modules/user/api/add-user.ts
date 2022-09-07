import axios from "axios";
import { User } from "../model";

export const addUser = async (data: User): Promise<void> => {
  const requestData = {
    ...data,
    ...(data.movie && { movieId: data.movie?._id }),
  };

  await axios.post(
    `${process.env.REACT_APP_BACKEND_URL}/register`,
    requestData
  );
};
