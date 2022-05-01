import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import logoUrl from "../../logo.svg";

export const Header = () => (
  <div className="header">
    <Link to="/">
      <img src={logoUrl} alt="logo" />
    </Link>
    <div>
      <Link to="/">MyList</Link>
    </div>
  </div>
);
