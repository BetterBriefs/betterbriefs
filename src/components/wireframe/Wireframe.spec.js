import React from "react";
import ReactDOM from "react-dom";
import { Wireframe } from "./Wireframe";
import logoUrl from "../../logo.svg";
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
describe('Brief Wireframe', () => {
    it("When a Brief Wireframe is Generated, a Wireframe element should be renderd", () => {
        //Act
        ReactDOM.render(<Wireframe layoutUrl={logoUrl}> </Wireframe>, container);
        expect(container.querySelectorAll('img')).toHaveProperty("length", 1);
    });
});