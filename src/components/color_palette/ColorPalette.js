import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ColorElement } from "../color_palette/ColorElement";
import { Card } from "../card/Card";
import { ReloadButton } from "../reload_button/ReloadButton";
import "./ColorPalette.css";

export const ColorPalette = ({ colors, allColors }) => {
  let { seed } = useParams();
  const navigate = useNavigate();

  const getRandomColor = () => {
    let randomColorIndex = Math.floor(Math.random() * allColors.length) + 1;
    seed = seed.replace(/c.*f/, 'c' + randomColorIndex + 'f')
    navigate(
      `/${seed}`
    );
  }  

  return (
    <Card>
      <div className="reload__button">
        <h2>Colors</h2>
        <ReloadButton hoverText="Change colors" onClick={ getRandomColor }></ReloadButton>
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
