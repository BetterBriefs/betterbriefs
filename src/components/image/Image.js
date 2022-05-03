import React, { useEffect, useState } from "react";
import "./Image.css";

export default function Image ({src, alt, className, fallback}) {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(false)
  }, [src]) 

  return (
  <>
    <div className={fallback} style={{ display: !loaded ? 'block' : 'none' }}></div>
    <img src={src} alt={alt} className={className} style={{ display: loaded ? 'block' : 'none' }} onLoad={() => setLoaded(true)} />
  </>
  )
}