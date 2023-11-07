import { useEffect } from "react";
import useMovieApi from "../../hooks/useMoviesApi";
import { useAppDispatch } from "../../store/hooks";
import { loadMoviesActionCreator } from "../../store/features/movies/moviesSlice";

const HomePage = (): React.ReactElement => {
  const dispatch = useAppDispatch();
  const { getMovies } = useMovieApi();

  useEffect(() => {
    async () => {
      const currentMovies = await getMovies();
      dispatch(loadMoviesActionCreator(currentMovies));
    };
  }, [dispatch, getMovies]);

  return (
    <section className="main-container">
      <h1 className="title">The most curated movies of Michel Gondry</h1>
    </section>
  );
};

export default HomePage;
