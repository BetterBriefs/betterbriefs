import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
import fhsLogoUrl from "../../fhs-logo-icon.svg";

export const Footer = () => (
  <section className="footer">
    <div className="footer__items-container">
      <ul>
        <li><Link to="/imprint">Imprint</Link></li>
        <li><Link to="/privacy">Data Privacy</Link></li>
      </ul>
      <ul>
        <li><a href="https://www.fh-salzburg.ac.at/" target="_blank" rel="noreferrer"><img className="Fhs__logo" src={fhsLogoUrl+""} alt="fh salzburg logo"></img></a></li>
      </ul>
    </div>
  </section>
);
