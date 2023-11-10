import { configureStore } from "@reduxjs/toolkit";
import { moviesReducer } from "../store/features/movies/moviesSlice";
import mockMovies from "../mocks/mockData";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { render } from "@testing-library/react";

const customRender = (children: React.ReactElement) => {
  const mockStore = configureStore({
    reducer: {
      moviesState: moviesReducer,
    },
    preloadedState: { moviesState: { movies: mockMovies } },
  });

  render(
    <BrowserRouter>
      <Provider store={mockStore}>{children}</Provider>
    </BrowserRouter>,
  );
};

export default customRender;
