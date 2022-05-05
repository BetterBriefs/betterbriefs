import React, { useCallback } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ColorElement } from "../color_palette/ColorElement";
import { Card } from "../card/Card";
import { ReloadButton } from "../reload_button/ReloadButton";
import "./ColorPalette.css";

export const ColorPalette = ({ colors, colorsLength }) => {
  const navigate = useNavigate();
  let { seed } = useParams();

  const getRandomColor = useCallback(() => {
    let randomColorIndex = Math.floor(Math.random() * colorsLength) + 1;
    let newSeed = seed.replace(/c.*f/, "c" + randomColorIndex + "f");
    navigate(`/${newSeed}`);
  }, [colorsLength, seed, navigate]);

  return (
    <Card>
      <div className="reload__button">
        <h2>Colors</h2>
        <ReloadButton
          hoverText="Change colors"
          onClick={getRandomColor}
        ></ReloadButton>
      </div>
      <div className="flexbox">
        <ColorElement color={colors.color1}></ColorElement>
        <ColorElement color={colors.color2}></ColorElement>
        <ColorElement color={colors.color3}></ColorElement>
        <ColorElement color={colors.color4}></ColorElement>
        <ColorElement color={colors.color5}></ColorElement>
      </div>
    </Card>
  );
};
