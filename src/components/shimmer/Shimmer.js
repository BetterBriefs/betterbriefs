import React from "react";
import Skeleton from "@mui/material/Skeleton";
import "./Shimmer.css";

export const Shimmer = ({ variant = "rechtangle", height = 400, width="100%" }) => {
  return (
    <>
    <div className="shimmer">
        <Skeleton variant={variant} animation="wave" height={height} width={width} sx={{ borderRadius: "10px" }}/>
    </div>
    </>
  );
};
