import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ReactDOM from "react-dom";
import { AddToFavorites } from "./AddToFavorites";
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
describe("Brief Add To Favorites Action", () => {
  it("When a user clicks the Button 'Add to favorites', the onFavoritesChange function will be called", () => {
    const onFavoritesChange = jest.fn();
    //Act
    ReactDOM.render(
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <AddToFavorites
                brief={{}}
                onFavoritesChange={onFavoritesChange}
              ></AddToFavorites>
            }
          />
        </Routes>
        <AddToFavorites
          brief={{}}
          onFavoritesChange={onFavoritesChange}
        ></AddToFavorites>
      </BrowserRouter>,
      container
    );
    fireEvent.click(container.querySelector("button"));
    expect(onFavoritesChange).toHaveBeenCalledTimes(1);
  });
});
