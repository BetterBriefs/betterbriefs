import React from "react";
import Skeleton from "@mui/material/Skeleton";

export const ShimmerCircle = () => {
  return (
    <Skeleton variant="circular" animation="wave" height={150} width={150} />
  );
};
