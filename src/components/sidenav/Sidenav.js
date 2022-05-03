import React from "react";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import Fade from "@mui/material/Fade";
import Dialog from '@mui/material/Dialog';
import { Button } from "../button/Button";

export const SideNav = ({ hoverText, icon, onClick, buttonText, children }) => {
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="sidenav">
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
              cursor: "pointer",
            },
          }}
        >
          {icon}
        </IconButton>
      </Tooltip>
      <Dialog open={open} onClose={handleClose} sx={{ color: '#ea5504'}}>
          {children}
        <Button onClick={onClick} usage="secondary">
          {buttonText}
        </Button>
      </Dialog>
    </div>
  );
};
