import React from "react";
import ReactDOM from "react-dom";
import { Select } from "./Select";
import { cleanup, fireEvent } from "@testing-library/react";

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
describe("Brief Select Difficulty", () => {
  it("When a user change the difficulty, the onChange function should be called", () => {
    const onChange = jest.fn();
    //Act
    ReactDOM.render(<Select setDifficulty={onChange}></Select>, container);
    fireEvent.change(container.querySelector("select"), {
      target: { value: "medium" },
    });
    expect(onChange).toHaveBeenCalledTimes(1);
  });

  it("When a user want to select a difficulty, the dropdown should have three entries.", () => {
    const onChange = jest.fn();
    //Act
    ReactDOM.render(<Select setDifficulty={onChange}></Select>, container);
    expect(container.querySelectorAll("option")).toHaveProperty("length", 3);
  });

  it("When a user want to select a difficulty, the dropdown should show easy, normal and advanced", () => {
    const onChange = jest.fn();
    //Act
    ReactDOM.render(<Select setDifficulty={onChange}></Select>, container);
    expect(container.querySelectorAll("option")[0]).toHaveProperty(
      "value",
      "easy"
    );
    expect(container.querySelectorAll("option")[1]).toHaveProperty(
      "value",
      "normal"
    );
    expect(container.querySelectorAll("option")[2]).toHaveProperty(
      "value",
      "advanced"
    );
  });
});
