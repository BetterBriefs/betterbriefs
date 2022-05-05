import React from "react";
import Skeleton from "@mui/material/Skeleton";
import "./Shimmer.css";

export const ShimmerRectangle = () => {
  return (
    <>
    <div className="shimmer">
        <Skeleton variant="rectangle" animation="wave" height={300} sx={{ borderRadius: "10px" }} />
    </div>
    </>
  );
};
