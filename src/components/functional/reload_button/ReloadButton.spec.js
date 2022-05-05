import React from "react";
import ReactDOM from "react-dom";
import ReloadIcon from "@mui/icons-material/Cached";
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

describe("Reload Icon", () => {
  it("when the reload icon is clicked, onClick method is called", () => {
    const onClick = jest.fn();
    ReactDOM.render(
        <ReloadIcon
        onClick={onClick}
        fontSize="large"
        sx={{
          color: "#1f7a83",
          "&:hover": {
            cursor: "pointer",
          },
        }}
      />, container);
    fireEvent.click(container.querySelector("svg"));
    expect(onClick).toHaveBeenCalledTimes(1);
  });
});