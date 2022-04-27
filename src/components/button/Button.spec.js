import React from "react";
import ReactDOM from "react-dom";
import { Button } from "./Button";
import { fireEvent, queryByText } from "@testing-library/react";

//initial setup before each test
let container;

beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  document.body.removeChild(container);
  container = null;
});

it("when a text is given, the button should be rendered with text", () => {
  //Act
  ReactDOM.render(<Button>Click Me</Button>, container);
  expect(queryByText(container, "Click Me")).toBeTruthy();
});

it("when the button is clicked, onClick method is called", () => {
  const onClick = jest.fn();
  ReactDOM.render(<Button onClick={onClick}>Click Me</Button>, container);
  fireEvent.click(container.querySelector("button"));
  expect(onClick).toHaveBeenCalledTimes(1);
});

it("when no type is given, button type is submit", () => {
  ReactDOM.render(<Button>Click Me</Button>, container);
  expect(queryByText(container, "Click Me")).toHaveProperty("type", "submit");
});

it("when type is given, button type is exact this one", () => {
  ReactDOM.render(<Button type="button">Click Me</Button>, container);
  expect(queryByText(container, "Click Me")).toHaveProperty("type", "button");
});
