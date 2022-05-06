import React from "react";
import ReactDOM from "react-dom";
import { ColorCircle } from "./ColorCircle";
import { cleanup, fireEvent } from "@testing-library/react";

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
describe("Color Circle", () => {
    it("When component color circle is implemented, color circle is rendered.", () => {
        //Act
        ReactDOM.render(<ColorCircle color={color}></ColorCircle>, container);
        expect(container.querySelectorAll(".circle")).toHaveProperty("length", 1);
      });
    it("When component color circle is implemented, given color is rendered.", () => {
        //Act
        ReactDOM.render(<ColorCircle color={color}></ColorCircle>, container);
        expect(container.querySelector(".circle")).toHaveStyle(`background-color: #${color}`);
        //expect(container.querySelectorAll(".circle")).toHaveProperty("length", 1);
    });
});
