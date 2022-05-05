import React from "react";
import "./ColorElement.css";

export const ColorElement = ({ color }) => {
  return (
    <div className="element-box">
      <div className="flexbox-center">
        <div className="circle" style={{ backgroundColor: "#" + color }}></div>
      </div>
      <p>#{color}</p>
    </div>
  );
};
