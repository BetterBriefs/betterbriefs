import React from "react";
import ReactDOM from "react-dom";
import { Button } from "./Button";
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

describe('Brief Generate Button', () => {
    it("when the generate button is clicked, onClick method is called", () => {
        const onClick = jest.fn();
        ReactDOM.render(<Button onClick={onClick}>Click Me</Button>, container);
        fireEvent.click(container.querySelector("button"));
        expect(onClick).toHaveBeenCalledTimes(1);
    });
});