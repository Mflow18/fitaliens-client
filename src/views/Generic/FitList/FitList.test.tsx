import React from "react";
import FitList from "./FitList";
import { render, screen } from "@testing-library/react";

describe("<FitList />", () => {
  describe("Displays component", () => {
    render(
      <FitList
        list={[{ name: "test1" }, { name: "test2" }, { name: "test3" }]}
      />
    );

    it("displays component", () => {
      expect(screen.getByText("test1")).toBeDefined();
      expect(screen.getByText("test2")).toBeDefined();
      expect(screen.getByText("test3")).toBeDefined();
    });
  });
});
