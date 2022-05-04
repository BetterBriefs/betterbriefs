import React from "react";
import Chip from "@mui/material/Chip";

export const Tags = ({ difficulty, type }) => {
  return (
    <>
      <Chip
        label={type}
        color="info"
        sx={{
          textTransform: "capitalize",
          marginRight: "10px",
        }}
      />
      <Chip
        label={difficulty}
        color="info"
        sx={{
          textTransform: "capitalize",
        }}
      />
    </>
  );
};
