import React from "react";
import PrintIcon from '@mui/icons-material/Print';
import { SidenavElement } from "../sidenav_element/SidenavElement";

export const PrintBrief = () => {

  function printBrief() {
    window.print();
  }

  return (
    <>
      <SidenavElement hoverText="Print as PDF" handleClickOpen={printBrief}>
        <PrintIcon fontSize="large" sx={{ color: "#1f7a83" }} />
      </SidenavElement>
    </>
  );
};
