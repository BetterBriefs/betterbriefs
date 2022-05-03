import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ReactDOM from "react-dom";
import { BriefData } from "./BriefData";
import { cleanup, fireEvent } from "@testing-library/react";

//initial setup before each test
let container;

const setTimeoutPromise = (timeout) => {
  return new Promise((resolve) => setTimeout(resolve, timeout));
};

const useData = () => {
  // database
  // all data for brief creation
  const [colors, setColors] = useState([
    {
      color2: "ea638c",
      color1: "89023e",
      color4: "30343f",
      color5: "ffd9da",
      color3: "1b2021",
      id: "1",
    },
  ]);
  const [fonts, setFonts] = useState([
    {
      paragraph_font: "Source Sans Pro",
      paragraph_link: "https://fonts.google.com/specimen/Source+Sans+Pro",
      title_font: "Playfair Display",
      title_link: "https://fonts.google.com/specimen/Playfair+Display",
      id: "1",
    },
  ]);
  const [ideas, setIdeas] = useState([
    {
      title: "Hi, I’m a webdesigner!",
      type: "portfolio",
      difficulty: "easy",
      description:
        "I’m a freelancer earn money with web design. I need a website that shows all my projects and skills, where people can get impressions of my work. The main target group are companies or persons who need any design for web purposes. There should be following sections: about me, my projects, my skills and my timeline/education. ",
      id: "1",
    },
  ]);
  const [personas, setPersonas] = useState([
    {
      sex: false,
      about:
        "Elias is brave and always looking for a new challenge. Boring stuff is not on his to-do list. His weirdest and craziest hobby is ironing while he is climbing a mountain. He was a participant in the Extreme Ironing World Championships. Yep. You read it correctly, google it!",
      avatar: "gs://betterbriefs-8b032.appspot.com/avatars/person10.jpg",
      age: 36,
      name: "Elias Lamb",
      id: "1",
    },
  ]);
  const [layouts, setLayouts] = useState([
    {
      link:
        "gs://betterbriefs-8b032.appspot.com/layouts/Portfolio - Template 5.png",
      type: "portfolio",
      id: "1",
    },
  ]);

  const getColors = () => {
    // await setTimeoutPromise(500);
    const data = [
      {
        color2: "ea638c",
        color1: "89023e",
        color4: "30343f",
        color5: "ffd9da",
        color3: "1b2021",
        id: "1",
      },
    ];
    console.log("fake colors are generated");
    setColors(data);
  };

  const getFonts = () => {
    // await setTimeoutPromise(500);
    const data = [
      {
        paragraph_font: "Source Sans Pro",
        paragraph_link: "https://fonts.google.com/specimen/Source+Sans+Pro",
        title_font: "Playfair Display",
        title_link: "https://fonts.google.com/specimen/Playfair+Display",
        id: "1",
      },
    ];
    setFonts(data);
  };

  const getIdeas = () => {
    // await setTimeoutPromise(500);
    const data = [
      {
        title: "Hi, I’m a webdesigner!",
        type: "portfolio",
        difficulty: "easy",
        description:
          "I’m a freelancer earn money with web design. I need a website that shows all my projects and skills, where people can get impressions of my work. The main target group are companies or persons who need any design for web purposes. There should be following sections: about me, my projects, my skills and my timeline/education. ",
        id: "7",
      },
    ];
    setIdeas(data);
  };

  const getLayouts = () => {
    // await setTimeoutPromise(500);
    const data = [
      {
        link:
          "gs://betterbriefs-8b032.appspot.com/layouts/Portfolio - Template 5.png",
        type: "portfolio",
        id: "5",
      },
    ];
    setLayouts(data);
  };

  const getPersonas = () => {
    //await setTimeoutPromise(500);
    const data = [
      {
        sex: false,
        about:
          "Elias is brave and always looking for a new challenge. Boring stuff is not on his to-do list. His weirdest and craziest hobby is ironing while he is climbing a mountain. He was a participant in the Extreme Ironing World Championships. Yep. You read it correctly, google it!",
        avatar: "gs://betterbriefs-8b032.appspot.com/avatars/person10.jpg",
        age: 36,
        name: "Elias Lamb",
        id: "10",
      },
    ];
    setPersonas(data);
  };

  return {
    colors,
    fonts,
    ideas,
    personas,
    layouts,
    getPersonas,
    getLayouts,
    getIdeas,
    getColors,
    getFonts,
  };
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
describe("Brief Wireframe", () => {
  it("When a user clicks the Generate Button, a random brief will be rendered", async () => {
    //Act
    ReactDOM.render(
      <>
        <BrowserRouter>
          <Routes>
            <Route
              path="/"
              element={<BriefData useDataHook={useData}> </BriefData>}
            />
            <Route
              path="/:seed"
              element={<BriefData useDataHook={useData}> </BriefData>}
            />
          </Routes>
        </BrowserRouter>
      </>,
      container
    );
    fireEvent.click(container.querySelector("button"));
    expect(await container.querySelectorAll(".card")).toHaveProperty(
      "length",
      5
    );
  });
});
