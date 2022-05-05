<<<<<<< HEAD:src/components/sidenav/print_brief/Print_brief.js
<<<<<<< Updated upstream:src/components/print_brief/Print_brief.js
import React from "react";
import PrintIcon from '@mui/icons-material/Print';
=======
import React, { useCallback } from "react";
import PrintIcon from "@mui/icons-material/Print";
>>>>>>> 769dc6a7f758b53ce221aafcd732103365913d1a:src/components/print_brief/Print_brief.js
import { SidenavElement } from "../sidenav_element/SidenavElement";
=======
import React, { useCallback } from "react";
import PrintIcon from "@mui/icons-material/Print";
import { SidenavElement } from "../../functional/sidenav_element/SidenavElement";
>>>>>>> Stashed changes:src/components/sidenav/print_brief/Print_brief.js

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
