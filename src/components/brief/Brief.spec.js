import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ReactDOM from "react-dom";
import { Brief } from "./Brief";
import { cleanup } from "@testing-library/react";

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
describe("Brief Wireframe", () => {
  it("When a user clicks the Generate Button, a random brief will be rendered", () => {
    //Act
    ReactDOM.render(
      <BrowserRouter>
        <Routes>
          <Route
            path="/:seed"
            element={
              <Brief
                onGenerateBrief={() => console.log("test")}
                brief={{
                  color: {
                    color2: "ea638c",
                    color1: "89023e",
                    color4: "30343f",
                    color5: "ffd9da",
                    color3: "1b2021",
                    id: "1",
                  },
                  font: {
                    paragraph_font: "Source Sans Pro",
                    paragraph_link:
                      "https://fonts.google.com/specimen/Source+Sans+Pro",
                    title_font: "Playfair Display",
                    title_link:
                      "https://fonts.google.com/specimen/Playfair+Display",
                    id: "1",
                  },
                  layout: {
                    link:
                      "gs://betterbriefs-8b032.appspot.com/layouts/Portfolio - Template 5.png",
                    type: "portfolio",
                    id: "5",
                  },
                  idea: {
                    title: "Hi, I’m a webdesigner!",
                    type: "portfolio",
                    difficulty: "easy",
                    description:
                      "I’m a freelancer earn money with web design. I need a website that shows all my projects and skills, where people can get impressions of my work. The main target group are companies or persons who need any design for web purposes. There should be following sections: about me, my projects, my skills and my timeline/education. ",
                    id: "1",
                  },
                  persona: {
                    sex: false,
                    about:
                      "Elias is brave and always looking for a new challenge. Boring stuff is not on his to-do list. His weirdest and craziest hobby is ironing while he is climbing a mountain. He was a participant in the Extreme Ironing World Championships. Yep. You read it correctly, google it!",
                    avatar:
                      "gs://betterbriefs-8b032.appspot.com/avatars/person10.jpg",
                    age: 36,
                    name: "Elias Lamb",
                    id: "1",
                  },
                }}
                briefGenerated={true}
                layoutUrl={""}
                personaUrl={""}
                setDifficulty={() => console.log("test")}
                onFavoritesChange={() => console.log("test")}
              ></Brief>
            }
          />
          <Route
            path="/"
            element={
              <Brief
                onGenerateBrief={() => console.log("test")}
                brief={{
                  color: {
                    color2: "ea638c",
                    color1: "89023e",
                    color4: "30343f",
                    color5: "ffd9da",
                    color3: "1b2021",
                    id: "1",
                  },
                  font: {
                    paragraph_font: "Source Sans Pro",
                    paragraph_link:
                      "https://fonts.google.com/specimen/Source+Sans+Pro",
                    title_font: "Playfair Display",
                    title_link:
                      "https://fonts.google.com/specimen/Playfair+Display",
                    id: "1",
                  },
                  layout: {
                    link:
                      "gs://betterbriefs-8b032.appspot.com/layouts/Portfolio - Template 5.png",
                    type: "portfolio",
                    id: "5",
                  },
                  idea: {
                    title: "Hi, I’m a webdesigner!",
                    type: "portfolio",
                    difficulty: "easy",
                    description:
                      "I’m a freelancer earn money with web design. I need a website that shows all my projects and skills, where people can get impressions of my work. The main target group are companies or persons who need any design for web purposes. There should be following sections: about me, my projects, my skills and my timeline/education. ",
                    id: "1",
                  },
                  persona: {
                    sex: false,
                    about:
                      "Elias is brave and always looking for a new challenge. Boring stuff is not on his to-do list. His weirdest and craziest hobby is ironing while he is climbing a mountain. He was a participant in the Extreme Ironing World Championships. Yep. You read it correctly, google it!",
                    avatar:
                      "gs://betterbriefs-8b032.appspot.com/avatars/person10.jpg",
                    age: 36,
                    name: "Elias Lamb",
                    id: "1",
                  },
                }}
                briefGenerated={true}
                layoutUrl={""}
                personaUrl={""}
                setDifficulty={() => console.log("test")}
                allColors={[
                  {
                    color2: "ea638c",
                    color1: "89023e",
                    color4: "30343f",
                    color5: "ffd9da",
                    color3: "1b2021",
                    id: "1",
                  },
                ]}
                fontsLength={1}
                onFavoritesChange={() => console.log("test")}
              ></Brief>
            }
          />
        </Routes>
        <Brief
          onGenerateBrief={() => console.log("test")}
          brief={{
            color: {
              color2: "ea638c",
              color1: "89023e",
              color4: "30343f",
              color5: "ffd9da",
              color3: "1b2021",
              id: "1",
            },
            font: {
              paragraph_font: "Source Sans Pro",
              paragraph_link:
                "https://fonts.google.com/specimen/Source+Sans+Pro",
              title_font: "Playfair Display",
              title_link: "https://fonts.google.com/specimen/Playfair+Display",
              id: "1",
            },
            layout: {
              link:
                "gs://betterbriefs-8b032.appspot.com/layouts/Portfolio - Template 5.png",
              type: "portfolio",
              id: "5",
            },
            idea: {
              title: "Hi, I’m a webdesigner!",
              type: "portfolio",
              difficulty: "easy",
              description:
                "I’m a freelancer earn money with web design. I need a website that shows all my projects and skills, where people can get impressions of my work. The main target group are companies or persons who need any design for web purposes. There should be following sections: about me, my projects, my skills and my timeline/education. ",
              id: "1",
            },
            persona: {
              sex: false,
              about:
                "Elias is brave and always looking for a new challenge. Boring stuff is not on his to-do list. His weirdest and craziest hobby is ironing while he is climbing a mountain. He was a participant in the Extreme Ironing World Championships. Yep. You read it correctly, google it!",
              avatar:
                "gs://betterbriefs-8b032.appspot.com/avatars/person10.jpg",
              age: 36,
              name: "Elias Lamb",
              id: "1",
            },
          }}
          briefGenerated={true}
          layoutUrl={""}
          personaUrl={""}
          setDifficulty={() => console.log("test")}
          allColors={[
            {
              color2: "ea638c",
              color1: "89023e",
              color4: "30343f",
              color5: "ffd9da",
              color3: "1b2021",
              id: "1",
            },
          ]}
          fontsLength={1}
          onFavoritesChange={() => console.log("test")}
        ></Brief>
      </BrowserRouter>,
      container
    );
    expect(
      container.querySelector(".main-container").querySelectorAll(".card")
    ).toHaveProperty("length", 5);
  });
});
