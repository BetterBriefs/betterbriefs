import React from "react";
import LinkIcon from "@mui/icons-material/Link";
import "./Font.css";

export const Font = ({ fontFamily, fontLink }) => {
  const style = {
    fontFamily: fontFamily,
    fontSize: "3.5rem",
    lineHeight: "4rem",
  };
  return (
    <>
      <div className="fonts__headline">
        <h3>Paragraph Font</h3>
        <a href={fontLink} target="_blank" rel="noreferrer">
          <LinkIcon sx={{ marginTop: "1.5rem" }} />
        </a>
      </div>
      <p style={style}>{fontFamily}</p>
    </>
  );
};
