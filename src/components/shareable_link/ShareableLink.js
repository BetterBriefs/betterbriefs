import React from "react";
import ShareIcon from "@mui/icons-material/Share";
import { SideNav } from "../sidenav/Sidenav";

export const ShareableLink = () => {
  function getURL() {
    alert("The URL of this page is: " + window.location.href);
  }
  const icon = <ShareIcon fontSize="large" sx={{ color: "#1f7a83" }} />;

  return (
    <SideNav title="Copy link" onClick={getURL} icon={icon} buttonText="Yes, do it">
      <p>Are you sure that you want to delete your awesome Project?</p>
    </SideNav>
  );
};
