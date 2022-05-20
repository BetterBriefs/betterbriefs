import React from "react";
import ReactDOM from "react-dom";
import { Font } from "./Font";
import { cleanup, queryByText } from "@testing-library/react";

//initial setup before each test
let container;
const link = "https://www.google.at";
const fontFamily = "Calibri";

beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  document.body.removeChild(container);
  container = null;
  cleanup();
});
describe("Brief Font component", () => {
  it("When a font is given, the font name should be rendered", () => {
    //Act
    ReactDOM.render(
      <Font fontFamily={fontFamily} fontLink={link} paragraph={true}></Font>,
      container
    );
    expect(queryByText(container, fontFamily)).toBeTruthy();
  });
  it("When a font is given, the font link is linked correct", () => {
    ReactDOM.render(
      <Font fontFamily={fontFamily} fontLink={link} paragraph={true}></Font>,
      container
    );
    expect(container.querySelector("a")).toHaveProperty("href", link + "/");
  });
  it("When a font is given without the paragraph flag, the headline should be 'Paragraph Font'", () => {
    ReactDOM.render(
      <Font fontFamily={fontFamily} fontLink={link}></Font>,
      container
    );
    expect(queryByText(container, "Paragraph Font")).toBeTruthy();
  });
  it("When a font is given with the paragraph flag false, the headline should be 'Title Font'", () => {
    ReactDOM.render(
      <Font fontFamily={fontFamily} fontLink={link} paragraph={false}></Font>,
      container
    );
    expect(queryByText(container, "Title Font")).toBeTruthy();
  });
  it("When a font is given, the font-family style is set to it", () => {
    ReactDOM.render(
      <Font fontFamily={fontFamily} fontLink={link} paragraph={false}></Font>,
      container
    );
    expect(container.querySelector("p")).toHaveStyle(
      `font-family: ${fontFamily}`
    );
  });
});
