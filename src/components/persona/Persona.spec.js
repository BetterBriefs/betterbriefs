import React from "react";
import ReactDOM from "react-dom";
import { Persona } from "./Persona";
import { cleanup, queryByText } from "@testing-library/react";

//initial setup before each test
let container;
let person = {};
person.name = "Helen Harveys";
person.sex = true;
person.age = 53;
person.about =
  "Helen is one of the craziest persons in her friendzone. Since she's been 16, every year she visits at least three heavy metal festivals. She travels around the world to watch all her favourite musicians at concerts. When she's at home, she spends her time on gardening and listening to loud music.";

let personAvatarUrl = "";

beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  document.body.removeChild(container);
  container = null;
  cleanup();
});
describe("Brief Persona", () => {
  it("When a Brief Persona is Generated and renderd, The persona name should be renderd", () => {
    //Act
    ReactDOM.render(
      <Persona personaUrl={personAvatarUrl} persona={person}></Persona>,
      container
    );
    expect(queryByText(container, person.name)).toBeTruthy();
  });
  it("When a Brief Persona is Generated and renderd, The persona Age should be renderd", () => {
    //Act
    ReactDOM.render(
      <Persona personaUrl={personAvatarUrl} persona={person}></Persona>,
      container
    );
    expect(queryByText(container, person.age)).toBeTruthy();
  });
  it("When a Brief Persona is Generated and renderd, The persona Gender should be renderd", () => {
    //Act
    ReactDOM.render(
      <Persona personaUrl={personAvatarUrl} persona={person}></Persona>,
      container
    );
    expect(queryByText(container, "female")).toBeTruthy();
  });
  it("When a Brief Persona is Generated and renderd, The persona description should be renderd", () => {
    //Act
    ReactDOM.render(
      <Persona personaUrl={personAvatarUrl} persona={person}></Persona>,
      container
    );
    expect(queryByText(container, person.about)).toBeTruthy();
  });
});
