import React from "react";
import ReactDOM from "react-dom";
import { Card } from "./Card";
import { cleanup, queryByText } from "@testing-library/react";

//initial setup before each test
let container;

beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  document.body.removeChild(container);
  container = null;
  cleanup();
});

describe("Card Component", () => {
  it("When a Card is created, the given children should be rendered", () => {
    ReactDOM.render(<Card>The children</Card>, container);
    expect(queryByText(container, "The children")).toBeTruthy();
  });
});
