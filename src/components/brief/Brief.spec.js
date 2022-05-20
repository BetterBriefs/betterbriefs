import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ReactDOM from "react-dom";
import { Brief } from "./Brief";
import { cleanup } from "@testing-library/react";
import { getBrief } from "../../helper/briefData";

//initial setup before each test
const container;

beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  document.body.removeChild(container);
  container = null;
  cleanup();
});
describe("Brief Generator", () => {
  it("When a Brief is generated, a brief will be rendered", () => {
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
                    id: "1"
                  },
                  font: {
                    paragraph_font: "Source Sans Pro",
                    paragraph_link:
                      "https://fonts.google.com/specimen/Source+Sans+Pro",
                    title_font: "Playfair Display",
                    title_link:
                      "https://fonts.google.com/specimen/Playfair+Display",
                    id: "1"
                  },
                  layout: {
                    link:
                      "https://snippets.araz.dev/betterbriefs_storage/layouts/Portfolio5.png",
                    type: "portfolio",
                    id: "5"
                  },
                  idea: {
                    title: "Hi, I’m a webdesigner!",
                    type: "portfolio",
                    difficulty: "easy",
                    description:
                      "I’m a freelancer earn money with web design. I need a website that shows all my projects and skills, where people can get impressions of my work. The main target group are companies or persons who need any design for web purposes. There should be following sections: about me, my projects, my skills and my timeline/education. ",
                    id: "1"
                  },
                  persona: {
                    sex: false,
                    about:
                      "Elias is brave and always looking for a new challenge. Boring stuff is not on his to-do list. His weirdest and craziest hobby is ironing while he is climbing a mountain. He was a participant in the Extreme Ironing World Championships. Yep. You read it correctly, google it!",
                    avatar:
                      "https://snippets.araz.dev/betterbriefs_storage/avatars/person10.jpg",
                    age: 36,
                    name: "Elias Lamb",
                    id: "1"
                  }
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
                    id: "1"
                  },
                  font: {
                    paragraph_font: "Source Sans Pro",
                    paragraph_link:
                      "https://fonts.google.com/specimen/Source+Sans+Pro",
                    title_font: "Playfair Display",
                    title_link:
                      "https://fonts.google.com/specimen/Playfair+Display",
                    id: "1"
                  },
                  layout: {
                    link:
                      "https://snippets.araz.dev/betterbriefs_storage/layouts/Portfolio - Template 5.png",
                    type: "portfolio",
                    id: "5"
                  },
                  idea: {
                    title: "Hi, I’m a webdesigner!",
                    type: "portfolio",
                    difficulty: "easy",
                    description:
                      "I’m a freelancer earn money with web design. I need a website that shows all my projects and skills, where people can get impressions of my work. The main target group are companies or persons who need any design for web purposes. There should be following sections: about me, my projects, my skills and my timeline/education. ",
                    id: "1"
                  },
                  persona: {
                    sex: false,
                    about:
                      "Elias is brave and always looking for a new challenge. Boring stuff is not on his to-do list. His weirdest and craziest hobby is ironing while he is climbing a mountain. He was a participant in the Extreme Ironing World Championships. Yep. You read it correctly, google it!",
                    avatar:
                      "https://snippets.araz.dev/betterbriefs_storage/avatars/person10.jpg",
                    age: 36,
                    name: "Elias Lamb",
                    id: "1"
                  }
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
                    id: "1"
                  }
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
              id: "1"
            },
            font: {
              paragraph_font: "Source Sans Pro",
              paragraph_link:
                "https://fonts.google.com/specimen/Source+Sans+Pro",
              title_font: "Playfair Display",
              title_link: "https://fonts.google.com/specimen/Playfair+Display",
              id: "1"
            },
            layout: {
              link:
                "https://snippets.araz.dev/betterbriefs_storage/layouts/Portfolio - Template 5.png",
              type: "portfolio",
              id: "5"
            },
            idea: {
              title: "Hi, I’m a webdesigner!",
              type: "portfolio",
              difficulty: "easy",
              description:
                "I’m a freelancer earn money with web design. I need a website that shows all my projects and skills, where people can get impressions of my work. The main target group are companies or persons who need any design for web purposes. There should be following sections: about me, my projects, my skills and my timeline/education. ",
              id: "1"
            },
            persona: {
              sex: false,
              about:
                "Elias is brave and always looking for a new challenge. Boring stuff is not on his to-do list. His weirdest and craziest hobby is ironing while he is climbing a mountain. He was a participant in the Extreme Ironing World Championships. Yep. You read it correctly, google it!",
              avatar:
                "https://snippets.araz.dev/betterbriefs_storage/avatars/person10.jpg",
              age: 36,
              name: "Elias Lamb",
              id: "1"
            }
          }}
          briefGenerated={true}
          layoutUrl={""}
          personaUrl={""}
          setDifficulty={() => console.log("test")}
          colorsLength={1}
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
  it("When brief is generated, the brief object has values", () => {
    const colors=[
    {
      color2: "ea638c",
      color1: "89023e",
      color4: "30343f",
      color5: "ffd9da",
      color3: "1b2021",
      id: "1"
    },
    {
      color2: "ea638c",
      color1: "89023e",
      color4: "30343f",
      color5: "ffd9da",
      color3: "1b2021",
      id: "2"
    },
  ]
  
  const fonts = [
    {
      paragraph_font: "Source Sans Pro",
      paragraph_link:
        "https://fonts.google.com/specimen/Source+Sans+Pro",
      title_font: "Playfair Display",
      title_link:
        "https://fonts.google.com/specimen/Playfair+Display",
      id: "1"
    },
    {
      paragraph_font: "Source Sans Pro",
      paragraph_link:
        "https://fonts.google.com/specimen/Source+Sans+Pro",
      title_font: "Playfair Display",
      title_link:
        "https://fonts.google.com/specimen/Playfair+Display",
      id: "2"
    },
  ] 
  
  const layouts = [
    {
      link:
        "https://snippets.araz.dev/betterbriefs_storage/layouts/Portfolio5.png",
      type: "portfolio",
      id: "5"
    },
    {
      link:
        "https://snippets.araz.dev/betterbriefs_storage/layouts/Portfolio5.png",
      type: "portfolio",
      id: "6"
    },
  ];
  const ideas = [
    {
      title: "Hi, I’m a webdesigner!",
      type: "portfolio",
      difficulty: "easy",
      description:
        "I’m a freelancer earn money with web design. I need a website that shows all my projects and skills, where people can get impressions of my work. The main target group are companies or persons who need any design for web purposes. There should be following sections: about me, my projects, my skills and my timeline/education. ",
      id: "1"
    },
    {
      title: "Hi, I’m a webdesigner!",
      type: "portfolio",
      difficulty: "easy",
      description:
        "I’m a freelancer earn money with web design. I need a website that shows all my projects and skills, where people can get impressions of my work. The main target group are companies or persons who need any design for web purposes. There should be following sections: about me, my projects, my skills and my timeline/education. ",
      id: "2"
    },
  ];
  const personas =[
    {
      sex: false,
      about:
        "Elias is brave and always looking for a new challenge. Boring stuff is not on his to-do list. His weirdest and craziest hobby is ironing while he is climbing a mountain. He was a participant in the Extreme Ironing World Championships. Yep. You read it correctly, google it!",
      avatar:
        "https://snippets.araz.dev/betterbriefs_storage/avatars/person10.jpg",
      age: 36,
      name: "Elias Lamb",
      id: "1"
    },{
      sex: false,
      about:
        "Elias is brave and always looking for a new challenge. Boring stuff is not on his to-do list. His weirdest and craziest hobby is ironing while he is climbing a mountain. He was a participant in the Extreme Ironing World Championships. Yep. You read it correctly, google it!",
      avatar:
        "https://snippets.araz.dev/betterbriefs_storage/avatars/person10.jpg",
      age: 36,
      name: "Elias Lamb",
      id: "2"
    }
  ];
    //Act
    const brief = getBrief(colors, fonts, personas, ideas, layouts, difficulty);

    expect(brief.color).toBeTruthy();
    expect(brief.font).toBeTruthy();
    expect(brief.persona).toBeTruthy();
    expect(brief.idea).toBeTruthy();
    expect(brief.layout).toBeTruthy();
    expect(brief.seed).toBeTruthy();
  });
});
