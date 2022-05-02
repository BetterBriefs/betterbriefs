import React from "react";
import { ColorElement } from "../color_palette/ColorElement";
import { Card } from "../card/Card";
import "./ColorPalette.css";

export const ColorPalette = ({ colors }) => {
  return (
    <Card>
      <h2>Colors</h2>
      <div className="flexbox">
        {colors.map((color, index) => {
          return <ColorElement key={index} color={color}></ColorElement>;
        })}
      </div>
    </Card>
  );
};
