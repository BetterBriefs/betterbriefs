import React from "react";
import ReactDOM from "react-dom";
import Image from "./Image";
import { cleanup } from "@testing-library/react";

//initial setup before each test
let container;
const src = "https://snippets.araz.dev/betterbriefs_storage/avatars/person1.jpg"

beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  document.body.removeChild(container);
  container = null;
  cleanup();
});

describe("Image", () => {
    it("When component image is implemented, image is rendered.", () => {
        //Act
        ReactDOM.render(
        <Image
            className="persona_avatar"
            src={src}
            alt="Persona"
            fallback="circle"
          />, container);
        expect(container.querySelectorAll(".persona_avatar")).toHaveProperty("length", 1);
      });
});
