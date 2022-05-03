import React from "react";
import ReactDOM from "react-dom";
import { Idea } from "./Idea";
import { cleanup, queryByText } from "@testing-library/react";

//initial setup before each test
let container;
let idea = {};
idea.type = "Portfolio";
idea.difficulty = "easy";
idea.title = "title of idea";
idea.description =
  "Lorem Ipsum Generator. Generate Lorem Ipsum placeholder text. Select the number of characters, words, sentences or paragraphs, and hit generate! Generated Lorem Ipsum.";

beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  document.body.removeChild(container);
  container = null;
  cleanup();
});
describe("Brief Idea", () => {
  it("When a Brief Idea is Generated and renderd, an Idea type should be renderd", () => {
    //Act
    ReactDOM.render(<Idea idea={idea}></Idea>, container);
    expect(queryByText(container, idea.type)).toBeTruthy();
  });
  it("When a Brief Idea is Generated and renderd, an Idea difficulty should be renderd", () => {
    //Act
    ReactDOM.render(<Idea idea={idea}></Idea>, container);
    expect(queryByText(container, idea.difficulty)).toBeTruthy();
  });
  it("When a Brief is Generated and renderd, an Idea title should be renderd", () => {
    //Act
    ReactDOM.render(<Idea idea={idea}></Idea>, container);
    expect(queryByText(container, idea.title)).toBeTruthy();
  });
  it("When a Brief Idea is Generated and renderd, an Idea description should be renderd", () => {
    //Act
    ReactDOM.render(<Idea idea={idea}></Idea>, container);
    expect(queryByText(container, idea.description)).toBeTruthy();
  });
});
