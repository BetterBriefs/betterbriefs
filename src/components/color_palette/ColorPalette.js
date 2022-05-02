import React from "react";
import { ColorElement } from "../color_palette/ColorElement";
import { Card } from "../card/Card";

export const ColorPalette = ({ colors }) => {
  return (
    <Card>
      <h2>Colors</h2>
      <div>
        {colors.map((color) => {
          return <ColorElement color={color}></ColorElement>;
        })}
      </div>
    </Card>
  );
};
