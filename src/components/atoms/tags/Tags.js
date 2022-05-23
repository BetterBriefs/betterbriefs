import React from "react";
import Chip from "@mui/material/Chip";
import "./Tags.css";


export const Tags = ({ difficulty, type }) => {
  return (
    <>
    <div class="tags">
      <Chip
        label={type}
        color="info"
      />
      <Chip
        label={difficulty}
        color="info"
      />
    </div>
    </>
  );
};
