import React from "react";
import { Card } from "../../../atoms/card/Card";
import LazyImage from "../../../functional/image/Image";

export const Wireframe = ({ layoutUrl }) => {
  return (
    <Card>
      <h2>Layout</h2>
      <LazyImage
        src={layoutUrl}
        alt="Wireframe"
        fallback="rectangle"
        className="wireframe-image"
      />
    </Card>
  );
};
