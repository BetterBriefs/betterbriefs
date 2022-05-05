import React from "react";
import { Button } from "../button/Button";
import IconButton from "@mui/material/IconButton";
import Dialog from "@mui/material/Dialog";
import CloseIcon from "@mui/icons-material/CancelOutlined";
import "../brief/Brief.css";
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
