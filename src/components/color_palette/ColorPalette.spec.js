import React from "react";
import ReactDOM from "react-dom";
import { ColorPalette } from "./ColorPalette";
import { cleanup } from "@testing-library/react";

//initial setup before each test
let container;
let color = {};
color.color1 ="ffffff";
color.color2 ="ffffff";
color.color3 ="ffffff";
color.color4 ="ffffff";
color.color5 ="ffffff";

beforeEach(() => {
    container = document.createElement("div");
    document.body.appendChild(container);
});

afterEach(() => {
    document.body.removeChild(container);
    container = null;
    cleanup();
});
describe('Brief ColorPalette', () => {
    it("When a Brief ColorPalette is Generated, a ColorPalette with 5 color elements should be renderd", () => {
        //Act
        ReactDOM.render(<ColorPalette colors={color}></ColorPalette>, container);
        expect(container.querySelectorAll('.element-box')).toHaveProperty("length", 5);
    });
});