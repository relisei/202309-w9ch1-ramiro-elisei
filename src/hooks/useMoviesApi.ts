import { useCallback } from "react";
import { MovieStructure } from "../store/features/movies/types";

const useMovieApi = () => {
  const apiUrl = import.meta.env.VITE_API_URL;

  const getMovies = useCallback(async () => {
    const response = await fetch(`${apiUrl}?_limit=5`);
    const movies = (await response.json()) as MovieStructure[];

    return movies;
  }, [apiUrl]);

  return { getMovies };
};

export default useMovieApi;
