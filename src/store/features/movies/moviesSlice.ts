import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { MoviesStateStructure } from "./types";
import { MovieStructure } from "./types";

const initialMoviesState: MoviesStateStructure = {
  movies: [],
};

const moviesSlice = createSlice({
  name: "movies",
  initialState: initialMoviesState,
  reducers: {
    loadMovies: (
      currentState,
      action: PayloadAction<MovieStructure[]>,
    ): MoviesStateStructure => ({
      ...currentState,
      movies: action.payload,
    }),

    toggleWatchedMovies: (
      currentState,
      action: PayloadAction<number>,
    ): MoviesStateStructure => ({
      ...currentState,
      movies: currentState.movies.map((movie) => ({
        ...movie,
        isSeen: movie.id === action.payload ? !movie.isSeen : movie.isSeen,
      })),
    }),
  },
});

export const {
  loadMovies: loadMoviesActionCreator,
  toggleWatchedMovies: toggleWatchedMoviesActionCreator,
} = moviesSlice.actions;

export const moviesReducer = moviesSlice.reducer;
