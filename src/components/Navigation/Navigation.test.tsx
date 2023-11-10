import customRender from "../../utils/customRender";
import Navigation from "./Navigation";
import { screen } from "@testing-library/react";

describe("Given a Navigation component", () => {
  describe("When it is rendered", () => {
    test("Then it should show a 'Movies' link", () => {
      const expectedTexMovies = "Movies";

      customRender(<Navigation />);

      const navigationLinkMovies = screen.getByRole("link", {
        name: expectedTexMovies,
      });

      expect(navigationLinkMovies).toBeInTheDocument();
    });
  });
});
