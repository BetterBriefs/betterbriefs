import React from "react";
import "./Footer.css";
import fhsLogoUrl from "../../fhs-logo-icon.svg";

export const Footer = () => (
  <section className="footer">
    <div className="footer__items-container">
      <ul>
        <li>Imprint</li>
        <li>Data Privacy</li>
      </ul>
      <ul>
        <li><a href="https://www.fh-salzburg.ac.at/"><img className="Fhs__logo" src={fhsLogoUrl+""} alt="fh salzburg logo"></img></a></li>
      </ul>
    </div>
  </section>
);
