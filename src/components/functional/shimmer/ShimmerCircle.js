import React from "react";
import Skeleton from "@mui/material/Skeleton";

function ShimmerCircle() {
  return (
    <Skeleton variant="circular" animation="wave" height={150} width={150} />
  );
}

export default React.memo(ShimmerCircle);
