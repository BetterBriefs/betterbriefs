import React from "react";
import ReactDOM from "react-dom";
import { SidenavElement } from "../sidenav_element/SidenavElement";
import ShareIcon from "@mui/icons-material/Share";
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

describe("Sidenav Button", () => {
  it("when the sidenav button is clicked, onClick method is called", () => {
    const onClick = jest.fn();
    ReactDOM.render(
      <SidenavElement hoverText="Share" handleClickOpen={onClick}>
        <ShareIcon fontSize="large" sx={{ color: "#1f7a83" }} />
      </SidenavElement>,
      container
    );
    fireEvent.click(container.querySelector("button"));
    expect(onClick).toHaveBeenCalledTimes(1);
  });
  it("when a sidenav button is given with a children, the children is rendered", () => {
    const onClick = jest.fn();
    ReactDOM.render(
      <SidenavElement hoverText="Share" handleClickOpen={onClick}>
        <ShareIcon fontSize="large" sx={{ color: "#1f7a83" }} />
      </SidenavElement>,
      container
    );
    expect(container.querySelector("svg")).toBeTruthy();
  });
});
