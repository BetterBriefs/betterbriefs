import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import logoUrl from "../../logo.svg";

export const Header = () => (
  <section className="header">
    <ul>
      <li><Link to="/"><img src={logoUrl} alt="logo" /></Link></li>
      <li><Link to="/about">About</Link></li>
      <li><Link to="/imprint">Imprint</Link></li>
    </ul>
  </section>
);
