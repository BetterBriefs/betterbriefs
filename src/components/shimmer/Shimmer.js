import React from "react";
import Skeleton from "@mui/material/Skeleton";
import "./Shimmer.css";

export const Shimmer = ({ variant = "rectangular", height, width }) => {
  return (
    <>
    <div className="shimmer">
        <Skeleton variant={variant} animation="wave" height={height} width={width} sx={{ borderRadius: "10px" }}/>
    </div>
    </>
  );
};
