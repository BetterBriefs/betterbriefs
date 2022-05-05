import React from "react";
<<<<<<< Updated upstream:src/components/overlay/Overlay.js
import { Button } from "../button/Button";
<<<<<<< HEAD:src/components/functional/overlay/Overlay.js
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "../../Theme";
=======
import { Button } from "../../atoms/button/Button";
>>>>>>> Stashed changes:src/components/functional/overlay/Overlay.js
=======
>>>>>>> 769dc6a7f758b53ce221aafcd732103365913d1a:src/components/overlay/Overlay.js
import IconButton from "@mui/material/IconButton";
import Dialog from "@mui/material/Dialog";
import CloseIcon from "@mui/icons-material/CancelOutlined";
import "../../brief/Brief.css";
import "./Overlay.css";

export const Overlay = ({
  handleOpen,
  handleClose,
  buttonText,
  buttonFunction,
  children,
}) => {
  return (
    <Dialog
      open={handleOpen}
      onClose={handleClose}
      PaperProps={{ sx: "#ea5504" }}
      sx={{ color: "#ea5504" }}
    >
      <IconButton
        aria-label="close"
        onClick={handleClose}
        sx={{
          position: "absolute",
          right: 8,
          top: 8,
          color: "#ea5504",
          "&:hover": {
            backgroundColor: "#ea5504",
            cursor: "pointer",
          },
        }}
      >
        <CloseIcon sx={{ color: "#ffffff", width: "2em", height: "2em" }} />
      </IconButton>
      <div className="overlay__content-margin">{children}</div>
      <div className="hero__buttons-container">
        <Button onClick={buttonFunction} usage="info">
          {buttonText}
        </Button>
      </div>
    </Dialog>
  );
};
