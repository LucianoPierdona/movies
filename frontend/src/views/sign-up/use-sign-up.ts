import { useState, useEffect, useMemo } from "react";
import { useNavigate } from "react-router-dom";

import { User } from "../shared/modules/user/model";
import { Movie } from "../shared/modules/movie/model";
import { addUser } from "../shared/modules/user/api/add-user";
import { range } from "../shared/utils/common";
import { getMovies } from "../shared/modules/movie/api/get-movies";

export interface HookData {
  data: User;
  movies: Movie[];
  sitRows: number[];
  sitPlaces: number[];
  handleChangeData: (fieldName: string, value: string) => void;
  handleChangeAvatar: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => Promise<void>;
  handleClearAvatar: () => void;
  handleChangeMovieId: (movieId: string) => void;
  handleChangeSitRow: (value: string | undefined) => void;
  handleChangeSitPlace: (value: string | undefined) => void;
}

const useSignUp = (): HookData => {
  const navigate = useNavigate();

  const [data, setData] = useState<User>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    avatarBase64: "",
    movie: undefined,
    sitRow: undefined,
    sitPlace: undefined,
  });

  const [movies, setMovies] = useState<Movie[]>([]);
  const [movieId, setMovieId] = useState<string | undefined>(undefined);

  useEffect(() => {
    getMovies().then((res) => setMovies(res));
  }, []);

  const sitRows = useMemo(() => {
    return range(1, 15);
  }, []);

  const sitPlaces = useMemo(() => {
    return range(1, 45);
  }, []);

  const handleChangeMovieId = (movieId: string) => {
    setMovieId(movieId);

    const movie = movies.find((movie) => movie._id === movieId);

    setData((data) => ({
      ...data,
      movie,
    }));
  };

  const handleChangeSitRow = (value: string | undefined) => {
    setData((data) => ({
      ...data,
      sitRow: value ? parseInt(value) : undefined,
    }));
  };

  const handleChangeSitPlace = (value: string | undefined) => {
    setData((data) => ({
      ...data,
      sitPlace: value ? parseInt(value) : undefined,
    }));
  };

  const handleChangeData = (fieldName: string, value: string) => {
    setData((data) => ({
      ...data,
      [fieldName]: value,
    }));
  };

  const handleChangeAvatar = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();

    if (e.target.files) {
      const reader = new FileReader();

      reader.addEventListener(
        "load",
        () => {
          const res = reader.result;

          if (res && typeof res === "string") {
            setData((v) => ({
              ...v,
              avatarBase64: res,
            }));
          }
        },
        false
      );

      reader.readAsDataURL(e.target.files[0]);
    }
  };

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    e.preventDefault();

    await addUser(data);

    navigate("/success");
  };

  const handleClearAvatar = (): void => {
    setData((v) => ({
      ...v,
      avatarBase64: "",
    }));
  };

  return {
    data,
    movies,
    sitRows,
    sitPlaces,
    handleChangeData,
    handleChangeAvatar,
    handleSubmit,
    handleClearAvatar,
    handleChangeMovieId,
    handleChangeSitRow,
    handleChangeSitPlace,
  };
};

export default useSignUp;
