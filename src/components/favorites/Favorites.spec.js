import React from "react";
import ReactDOM from "react-dom";
import Favorites from "./Favorites";
import { cleanup, fireEvent, queryByText } from "@testing-library/react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
//initial setup before each test
let container;
let favorites = [
  {
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
  },
  {
    description:
      'Hello! Our company is called "CareNow", and we help healthcare professionals to make treatment decisions that are best for patients. We work with hospitals, physicians, and other healthcare entities to improve outcomes and reduce costs. We want a website that shares our goals and journey. Can you make a website that has 1 pages? a home page that displays our company name big in a hero background image and a welcome message, as well as a section that displays our partners.',
    difficulty: "easy",
    title: "CareNow website",
    type: "portfolio",
    id: "3",
    color4: "8d99ae",
    color5: "edf2f4",
    color2: "2b2d42",
    color1: "d90429",
    color3: "ef233c",
    seed: "c3f4i34l1p15"
  },
  {
    difficulty: "easy",
    title: "In mood for pasta!",
    description:
      "I would like to have a website where I can sell my homemade pasta. My brand is called 'pastalicious'. For me it is important that there is a section 'About me' that tells my story. Information about my story: Every summer I visited my grandmother in Italy. There I have learned to make the most delicious pasta. I prefer a lovely design with some catching details – surprise me.",
    type: "shop",
    id: "17",
    color3: "444444",
    color1: "fdd947",
    color4: "d5d5d3",
    color5: "ffffff",
    color2: "252525",
    seed: "c17f21i19l9p12"
  }
];

beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  document.body.removeChild(container);
  container = null;
  cleanup();
});

describe("Favorites List", () => {
  it("When no favorites are available, a default text is shown", () => {
    const onFavoritesChange = jest.fn();
    //Act
    ReactDOM.render(
      <BrowserRouter>
        <Routes>
          <Route
            path="/favorites"
            element={
              <Favorites
                favorites={[]}
                onFavoritesChange={onFavoritesChange}
              ></Favorites>
            }
          />
        </Routes>
        <Favorites
          favorites={[]}
          onFavoritesChange={onFavoritesChange}
        ></Favorites>
      </BrowserRouter>,
      container
    );
    expect(queryByText(container, "No entries here yet.")).toBeTruthy();
  });
  it("When a favorites list with length n is given, n entries are rendered", () => {
    const onFavoritesChange = jest.fn();
    //Act
    ReactDOM.render(
      <BrowserRouter>
        <Routes>
          <Route
            path="/favorites"
            element={
              <Favorites
                favorites={favorites}
                onFavoritesChange={onFavoritesChange}
              ></Favorites>
            }
          />
        </Routes>
        <Favorites
          favorites={favorites}
          onFavoritesChange={onFavoritesChange}
        ></Favorites>
      </BrowserRouter>,
      container
    );
    expect(container.querySelectorAll(".favorite__container")).toHaveProperty(
      "length",
      3
    );
  });
});
