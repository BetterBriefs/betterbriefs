import React from "react";
import { Card } from "../card/Card";
import LazyImage from "../image/Image";

export const Wireframe = ({ layoutUrl }) => {
  return (
    <Card>
      <h2>Layout</h2>
      <LazyImage src={layoutUrl} alt="Wireframe" fallback="fallback_rectangle" />
    </Card>
  );
};
