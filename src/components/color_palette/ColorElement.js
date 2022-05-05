import React from "react";
import "./ColorElement.css";
import ContentCopyIcon from '@mui/icons-material/ContentCopy';

export const ColorElement = ({ color }) => {

  function copyToClipboard(text) {
    navigator.clipboard.writeText(text);
  };
  
  return (
    <>
      <div className="element-box">
        <div className="flexbox-center">
          <div
            className="circle"
            style={{ backgroundColor: "#" + color }}
            onClick={() => copyToClipboard('#'+color)}
          >
          <ContentCopyIcon /></div>
        </div>
        <p className="circle-tag">#{color}</p>
        
      </div>
    </>
  );
};
