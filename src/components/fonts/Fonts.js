import React from "react";
import { Card } from "../card/Card";
import "./Fonts.css";

export const Fonts = ({ fonts }) => {
  return (
    <Card>
      <h2>Fonts</h2>
      <h3>Title Font</h3>
      <a href={fonts.title_link} target="_blank" rel="noreferrer">
        {fonts.title_font}
      </a>
      <h3>Paragraph Font</h3>
      <a href={fonts.paragraph_link} target="_blank" rel="noreferrer">
        {fonts.paragraph_font}
      </a>
    </Card>
  );
};
