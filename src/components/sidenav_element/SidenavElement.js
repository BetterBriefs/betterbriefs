import React from "react";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import Fade from "@mui/material/Fade";

export const SidenavElement = ({ hoverText, handleClickOpen, children }) => {
  return (
    <Tooltip
      title={<p>{hoverText}</p>}
      placement="left"
      arrow
      TransitionComponent={Fade}
      sx={{ backgroundColor: "#ffffff" }}
    >
      <IconButton
        onClick={handleClickOpen}
        sx={{
          backgroundColor: "#fabe00",
          width: "3em",
          height: "3em",
          "&:hover": {
            backgroundColor: "#fabe00",
            cursor: "pointer"
          }
        }}
      >
        {children}
      </IconButton>
    </Tooltip>
  );
};
