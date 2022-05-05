import React from "react";
import Tooltip from "@mui/material/Tooltip";
import Fade from "@mui/material/Fade";
import ReloadIcon from "@mui/icons-material/Cached";

export const ReloadButton = ({ hoverText, onClick }) => {
  return (
    <Tooltip
      title={<p>{hoverText}</p>}
      placement="left"
      arrow
      TransitionComponent={Fade}
    >
      <ReloadIcon
        onClick={onClick}
        fontSize="large"
        sx={{
          color: "#1f7a83",
          "&:hover": {
            cursor: "pointer",
          },
        }}
      />
    </Tooltip>
  );
};