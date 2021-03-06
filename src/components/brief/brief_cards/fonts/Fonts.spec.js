import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ReactDOM from "react-dom";
import { Fonts } from "./Fonts";
import { cleanup, queryByText } from "@testing-library/react";

//initial setup before each test
let container;
const fonts = {};
fonts.title_link = "www.exampletitlefont.com";
fonts.title_font = "title_font";
fonts.paragraph_link = "www.exampleparagraphfont.com";
fonts.paragraph_font = "paragraph_font";

beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  document.body.removeChild(container);
  container = null;
  cleanup();
});
describe("Brief Fonts", () => {
  it("When Brief Fonts are Generated, Title Font should be renderd", () => {
    //Act
    ReactDOM.render(
      <BrowserRouter>
        <Routes>
          <Route path="/favorites" element={<Fonts fonts={fonts}></Fonts>} />
        </Routes>
        <Fonts fonts={fonts}></Fonts>
      </BrowserRouter>,
      container
    );
    expect(queryByText(container, fonts.title_font)).toBeTruthy();
  });
  it("When Brief Fonts are Generated, Paragraph Font should be renderd", () => {
    //Act
    ReactDOM.render(
      <BrowserRouter>
        <Routes>
          <Route path="/favorites" element={<Fonts fonts={fonts}></Fonts>} />
        </Routes>
        <Fonts fonts={fonts}></Fonts>
      </BrowserRouter>,
      container
    );
    expect(queryByText(container, fonts.paragraph_font)).toBeTruthy();
  });
});
