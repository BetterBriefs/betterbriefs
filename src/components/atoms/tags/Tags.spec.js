import React from "react";
import ReactDOM from "react-dom";
import { Tags } from "./Tags";
import { cleanup, queryByText } from "@testing-library/react";

//initial setup before each test
let container;
const difficulty = "normal";
const type = "shop";

beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  document.body.removeChild(container);
  container = null;
  cleanup();
});

describe("Color Circle", () => {
  it("When component tags is implemented, two tag elements are rendered.", () => {
    //Act
    ReactDOM.render(<Tags difficulty={difficulty} type={type} />, container);
    expect(container.querySelectorAll(".MuiChip-root")).toHaveProperty(
      "length",
      2
    );
  });
  it("When component tags is rendered, text of difficulty is displayed.", () => {
    //Act
    ReactDOM.render(<Tags difficulty={difficulty} type={type} />, container);
    expect(queryByText(container, "normal")).toBeTruthy();
  });
  it("When component tags is rendered, text of shop is displayed.", () => {
    //Act
    ReactDOM.render(<Tags difficulty={difficulty} type={type} />, container);
    expect(queryByText(container, "shop")).toBeTruthy();
  });
});
