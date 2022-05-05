import React, { useCallback } from "react";
import PrintIcon from "@mui/icons-material/Print";
import { SidenavElement } from "../../functional/sidenav_element/SidenavElement";

export const PrintBrief = () => {
  const printBrief = useCallback(() => {
    window.print();
  }, []);

  return (
    <SidenavElement hoverText="Print as PDF" handleClickOpen={printBrief}>
      <PrintIcon fontSize="large" sx={{ color: "#1f7a83" }} />
    </SidenavElement>
  );
};
