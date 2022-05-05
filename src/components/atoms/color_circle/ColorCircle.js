import React from "react";
import "./ColorCircle.css";

export const ColorCircle = ({ color }) => {
  return (
    <div className="circle" style={{ backgroundColor: "#" + color }}></div>
  );
};
