import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import logoUrl from "../../logo.svg";
import StarOutlineRoundedIcon from "@mui/icons-material/StarOutlineRounded";

export const Header = () => (
  <section className="header">
    <ul>
      <li>
        <Link to="/">
          <img src={logoUrl} alt="logo" />
        </Link>
      </li>
      <li>
        <Link className="favorites" id="favorites" to="/favorites">
          <StarOutlineRoundedIcon fontSize="large" />
          Favorites
        </Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
    </ul>
  </section>
);
