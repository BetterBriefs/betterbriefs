import React from "react";
import ShareIcon from "@mui/icons-material/Share";
import { SidenavElement } from "../sidenav_element/SidenavElement";
import { Overlay } from "../overlay/Overlay";

export const ShareableLink = () => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  function copyURL() {
    navigator.clipboard.writeText(window.location.href);
    handleClose();
  }

  return (
    <>
      <SidenavElement hoverText="Share" handleOpen={handleClickOpen}>
        <ShareIcon fontSize="large" sx={{ color: "#1f7a83" }} />
      </SidenavElement>
      <Overlay
        handleOpen={open}
        handleClose={handleClose}
        buttonText="Copy it!"
        buttonFunction={copyURL}
      >
        <p>Copy the following link: {window.location.href}</p>
      </Overlay>
    </>
  );
};
