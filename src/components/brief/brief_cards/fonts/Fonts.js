import React, { useCallback } from "react";
import { useParams, useNavigate } from "react-router-dom";
<<<<<<< Updated upstream:src/components/fonts/Fonts.js
import { Card } from "../card/Card";
import { ReloadButton } from "../reload_button/ReloadButton";
<<<<<<< HEAD:src/components/brief/brief_cards/fonts/Fonts.js
import "./Fonts.css";
=======
import { Card } from "../../../atoms/card/Card";
import { ReloadButton } from "../../../functional/reload_button/ReloadButton";
import { Font } from "../../../atoms/font/Font";
>>>>>>> Stashed changes:src/components/brief/brief_cards/fonts/Fonts.js
=======
import { Font } from "./Font";
>>>>>>> 769dc6a7f758b53ce221aafcd732103365913d1a:src/components/fonts/Fonts.js

export const Fonts = ({ fonts, fontsLength }) => {
  let { seed } = useParams();
  const navigate = useNavigate();

  const getRandomFontPair = useCallback(() => {
    let randomFontIndex = Math.floor(Math.random() * fontsLength) + 1;
    let newSeed = seed.replace(/f.*i/, "f" + randomFontIndex + "i");
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

      <Font fontFamily={fonts.title_font} fontLink={fonts.title_link}></Font>
      <Font
        fontFamily={fonts.paragraph_font}
        fontLink={fonts.paragraph_link}
      ></Font>
    </Card>
  );
};
