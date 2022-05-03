import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import logoUrl from "../../logo.svg";

export const Header = () => (
  <div className="header">
    <ul>
      <li><Link to="/"><img src={logoUrl} alt="logo" /></Link></li>
      <li><Link to="/">How-to</Link></li>
      <li><Link to="/">Imprint</Link></li>
    </ul>
  </div>
);
