import mockMovies from "../../../mocks/mockData";
import { moviesReducer, toggleWatchedMoviesActionCreator } from "./moviesSlice";
import { MoviesStateStructure } from "./types";

describe("Given the Moviereducer of movies", () => {
  describe("When reducer receive the state and an action toggleWatchedMovies ", () => {
    test("Then it should return Eternal Sunshine of the Spotless Mind as watched", () => {
      const currentState: MoviesStateStructure = { movies: mockMovies };
      const EternalSunshineId = 1;
      const expectedIsSeen = true;

      const toggleisSeenAction =
        toggleWatchedMoviesActionCreator(EternalSunshineId);
      const newState = moviesReducer(currentState, toggleisSeenAction);
      const EternalSunshine = newState.movies[0];

      expect(EternalSunshine.isSeen).toStrictEqual(expectedIsSeen);
    });
  });
});
