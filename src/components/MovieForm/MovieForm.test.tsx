import customRender from "../../utils/customRender";
import MovieForm from "./MovieForm";
import { screen } from "@testing-library/react";

beforeEach(() => {
  vi.resetAllMocks();
});

describe("Given a movieForm component", () => {
  const actionOnClick = vi.fn();

  describe("When it is rendered it", () => {
    test("Then button form should contain 'Add Movie'", () => {
      const expectedButtonText = "Add Movie";

      customRender(<MovieForm actionOnSubmit={actionOnClick} />);

      const formButtonElement = screen.getByRole("button", {
        name: expectedButtonText,
      });

      expect(formButtonElement).toBeInTheDocument();
    });
  });
});
