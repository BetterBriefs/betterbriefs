import React from "react";
import ReactDOM from "react-dom";
import { ColorElement } from "./ColorElement";
import { cleanup, queryByText } from "@testing-library/react";

//initial setup before each test
let container;
let color = "ffffff";

beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  document.body.removeChild(container);
  container = null;
  cleanup();
});
describe("Brief ColorElement", () => {
  it("When a Brief ColorElement is Generated, the color in the ColorElement component matches the given color", () => {
    //Act
    ReactDOM.render(<ColorElement color={color}></ColorElement>, container);
    expect(queryByText(container, "#" + color)).toBeTruthy();
  });
});
