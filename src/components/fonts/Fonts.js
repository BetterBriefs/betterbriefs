import React from "react";
import { Card } from "../card/Card";
import LinkIcon from "@mui/icons-material/Link";
import "./Fonts.css";

export const Fonts = ({ fonts }) => {
  const titleFont = {
    fontFamily: fonts.title_font,
    fontSize: "2.5rem",
  };
  const paragraphFont = {
    fontFamily: fonts.paragraph_font,
    fontSize: "2rem",
  };
  return (
    <Card>
      <h2>Fonts</h2>
      <div className="fonts__headline">
        <h3>Title Font</h3>
        <a href={fonts.title_link} target="_blank" rel="noreferrer">
          <LinkIcon sx={{ marginTop: "1.5rem" }} />
        </a>
      </div>

      <p style={titleFont}>{fonts.title_font}</p>
      <div className="fonts__headline">
        <h3>Paragraph Font</h3>
        <a href={fonts.paragraph_link} target="_blank" rel="noreferrer">
          <LinkIcon sx={{ marginTop: "1.5rem" }} />
        </a>
      </div>
      <p style={paragraphFont}>{fonts.paragraph_font}</p>
    </Card>
  );
};
