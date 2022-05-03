<<<<<<< HEAD
import React from "react";
import { Card } from "../card/Card";

export const Wireframe = ({ layoutUrl }) => {
  return (
    <Card>
      <h2>Layout</h2>
      <img src={layoutUrl} alt="layout"></img>
    </Card>
  );
};
=======
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
>>>>>>> 48d741ab13beadc2ad5097814b13118ad4bd38a3
