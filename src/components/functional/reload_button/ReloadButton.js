import React from "react";
import Tooltip from "@mui/material/Tooltip";
import Fade from "@mui/material/Fade";
import ReloadIcon from "@mui/icons-material/Cached";

function ReloadButton({ hoverText, onClick }) {
  return (
    <Tooltip
      title={<p>{hoverText}</p>}
      placement="left"
      TransitionComponent={Fade}
    >
      <ReloadIcon onClick={onClick}/>
    </Tooltip>
  );
}

export default React.memo(ReloadButton);
