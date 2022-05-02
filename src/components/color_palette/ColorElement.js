import React from "react";
import "./ColorElement.css";

export const ColorElement = ({ color }) => {
  return (
    <>
      <div className="flexbox">
        <div className="circle" style={{ backgroundColor: "#" + color }}></div>
      </div>
      <p>#{color}</p>
    </>
  );
};