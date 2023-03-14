import { screen } from "@testing-library/react-native";
import React from "react";
import renderWithProviders from "../../utils/renderWithProviders";
import Loader from "./Loader";

describe("Given the Loader component", () => {
  describe("When rendered", () => {
    test("Then it should show a loader spinner", async () => {
      const textLoader = "spinner";

      renderWithProviders(<Loader />);

      const loader = await screen.getByTestId(textLoader);

      expect(loader).toBeDefined();
    });
  });
});
