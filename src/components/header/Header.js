import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import logoUrl from "../../logo.svg";
import StarOutlineRoundedIcon from "@mui/icons-material/StarOutlineRounded";
import Badge from "@mui/material/Badge";

export const Header = ({ favorites }) => {
  return (
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
            <Badge
              size={"large"}
              badgeContent={favorites.length}
              color="primary"
            >
              <span className="favorites__text">Favorites</span>
            </Badge>
          </Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </section>
  );
};
