import React, { useCallback } from "react";
import ShareIcon from "@mui/icons-material/Share";
import { SidenavElement } from "../../functional/sidenav_element/SidenavElement";
import { Overlay } from "../../functional/overlay/Overlay";

export const ShareableLink = () => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = useCallback(() => {
    setOpen(true);
  }, []);

  const handleClose = useCallback(() => {
    setOpen(false);
  }, []);

  const copyURL = useCallback(() => {
    navigator.clipboard.writeText(window.location.href);
    handleClose();
  }, [handleClose]);

  return (
    <>
      <SidenavElement hoverText="Share" handleClickOpen={handleClickOpen}>
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
