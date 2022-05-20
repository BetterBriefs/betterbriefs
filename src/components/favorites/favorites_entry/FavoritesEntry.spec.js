import React from "react";
import ReactDOM from "react-dom";
import { FavoritesEntry } from "./FavoritesEntry";
import { cleanup } from "@testing-library/react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

//initial setup before each test
let container;
const favorite = {
  description:
    "Please create a website that mainly shows an overview of my recent photo shoots. I am focusing on landscape photography. The goal is to impress people with my work and get more requests for photo shoots. It is important that there is also an 'About me' section.",
  type: "portfolio",
  title: "Nature in the frame!",
  difficulty: "easy",
  id: "16",
  color3: "b8b8b8",
  color1: "ff5733",
  color5: "ffffff",
  color4: "f0f0f0",
  color2: "707070",
  seed: "c16f26i25l5p5"
};
beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  document.body.removeChild(container);
  container = null;
  cleanup();
});
describe("Favorites List Entry", () => {
  it("When a favorite brief is rendered, the title is shown", () => {
    const onRemove = jest.fn();
    //Act
    ReactDOM.render(
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <FavoritesEntry
                entry={favorite}
                onRemove={onRemove}
              ></FavoritesEntry>
            }
          />
        </Routes>
        <FavoritesEntry entry={favorite} onRemove={onRemove}></FavoritesEntry>
      </BrowserRouter>,
      container
    );
    expect(container.querySelector(".title").textContent).toEqual(
      favorite.title
    );
  });
  it("When a favorite brief is rendered, the tags are shown", () => {
    const onRemove = jest.fn();
    //Act
    ReactDOM.render(
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <FavoritesEntry
                entry={favorite}
                onRemove={onRemove}
              ></FavoritesEntry>
            }
          />
        </Routes>
        <FavoritesEntry entry={favorite} onRemove={onRemove}></FavoritesEntry>
      </BrowserRouter>,
      container
    );
    expect(container.querySelector(".tags")).toBeTruthy();
    //expect(queryByText(container, favorite.type)).toBeTruthy();
  });
  it("When a favorite brief is rendered, five color circles are shown", () => {
    const onRemove = jest.fn();
    //Act
    ReactDOM.render(
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <FavoritesEntry
                entry={favorite}
                onRemove={onRemove}
              ></FavoritesEntry>
            }
          />
        </Routes>
        <FavoritesEntry entry={favorite} onRemove={onRemove}></FavoritesEntry>
      </BrowserRouter>,
      container
    );
    expect(container.querySelector(".color-line")).toBeTruthy();
  });
});
