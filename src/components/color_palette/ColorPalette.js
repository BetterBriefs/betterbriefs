import React from "react";
import { ColorElement } from "../color_palette/ColorElement";
import { Card } from "../card/Card";
import "./ColorPalette.css";

export const ColorPalette = ({ colors }) => {
  return (
    <Card>
      <h2>Colors</h2>
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
