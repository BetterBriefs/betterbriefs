import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Card } from "../card/Card";
import LinkIcon from "@mui/icons-material/Link";
import { ReloadButton } from "../reload_button/ReloadButton";
import "./Fonts.css";

export const Fonts = ({ fonts, fontsLength }) => {
  let { seed } = useParams();
  const navigate = useNavigate();

  const titleFont = {
    fontFamily: fonts.title_font,
    fontSize: "3.5rem",
    lineHeight: "4rem",
  };
  const paragraphFont = {
    fontFamily: fonts.paragraph_font,
    fontSize: "3.5rem",
    lineHeight: "4rem",
  };

  const getRandomFontPair = () => {
    let randomFontIndex = Math.floor(Math.random() * fontsLength) + 1;
    seed = seed.replace(/f.*i/, "f" + randomFontIndex + "i");
    navigate(`/${seed}`);
  };

  return (
    <Card>
      <div className="reload__button">
        <h2>Fonts</h2>
        <ReloadButton
          hoverText="Change fonts"
          onClick={getRandomFontPair}
        ></ReloadButton>
      </div>
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
