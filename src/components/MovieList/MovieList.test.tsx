import { render, screen } from "@testing-library/react";
import mockMovies from "../../mocks/mockData";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import MovieList from "./MovieList";
import { moviesReducer } from "../../store/features/movies/moviesSlice";

describe("Given a MovieList component", () => {
  describe("When it receives an array of movies with 'Eternal Sunshine of the Spotless Mind' and 'The Science of Sleep", () => {
    test("Then it should show 2 MoviesCards, one with 'Eternal Sunshine of the Spotless Mind' and the other one with 'The Science of Sleep'", () => {
      const expectedMovies = 2;
      const movies = mockMovies;

      const mockStore = configureStore({
        reducer: {
          moviesState: moviesReducer,
        },
        preloadedState: { moviesState: { movies: movies } },
      });

      render(
        <Provider store={mockStore}>
          <MovieList />
        </Provider>,
      );

      const listItems = screen.getAllByRole("listitem").length;

      expect(listItems).toBe(expectedMovies);
    });
  });
});
