import React, { useCallback } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Card } from "../../../atoms/card/Card";
import ReloadButton from "../../../functional/reload_button/ReloadButton";
import { Font } from "../../../atoms/font/Font";

export const Fonts = ({ fonts, fontsLength }) => {
  let { seed } = useParams();
  const navigate = useNavigate();

  const getRandomFontPair = useCallback(() => {
    const randomFontIndex = Math.floor(Math.random() * fontsLength) + 1;
    const newSeed = seed.replace(/f.*i/, "f" + randomFontIndex + "i");
    navigate(`/${newSeed}`);
  }, [navigate, fontsLength, seed]);

  return (
    <Card>
      <div className="reload__button">
        <h2>Fonts</h2>
        <ReloadButton
          hoverText="Change fonts"
          onClick={getRandomFontPair}
        ></ReloadButton>
      </div>

      <Font
        fontFamily={fonts.title_font}
        fontLink={fonts.title_link}
        paragraph={false}
      ></Font>
      <Font
        fontFamily={fonts.paragraph_font}
        fontLink={fonts.paragraph_link}
      ></Font>
    </Card>
  );
};
