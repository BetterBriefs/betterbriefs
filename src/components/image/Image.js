import React, { useEffect, useState } from "react";
import { ShimmerCircle } from "../shimmer/ShimmerCircle";
import { ShimmerRectangle } from "../shimmer/ShimmerRectangle";
import "./Image.css";

export default function Image({ src, alt, className, fallback }) {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(false);
  }, [src]);

  return (
    <>
      <div
        style={{ display: !loaded ? "block" : "none" }}
      >
        { fallback === "circle" 
        ? 
        <ShimmerCircle /> 
        :
        <ShimmerRectangle /> 
        }
        
      </div>
      <img
        src={src}
        alt={alt}
        className={className}
        style={{ display: loaded ? "block" : "none" }}
        onLoad={() => setLoaded(true)}
      />
    </>
  );
}
