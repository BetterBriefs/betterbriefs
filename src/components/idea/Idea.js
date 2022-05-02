import React from "react";
import { Card } from "../card/Card";
import Chip from "@mui/material/Chip";

export const Idea = ({ idea }) => {
  return (
    <Card>
      <h2>Idea</h2>
      <Chip
        label={idea.type}
        color="info"
        sx={{
          textTransform: "capitalize",
          marginRight: "10px",
        }}
      />
      <Chip
        label={idea.difficulty}
        color="info"
        sx={{
          textTransform: "capitalize",
        }}
      />
      <h3>Title</h3>
      <p>{idea.title}</p>
      <h3>Description</h3>
      <p>{idea.description}</p>
    </Card>
  );
};
