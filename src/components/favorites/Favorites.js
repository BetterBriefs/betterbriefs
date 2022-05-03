import React, { useState, useEffect } from "react";
import { Card } from "../card/Card";
import { Tags } from "../tags/Tags";
import { ColorCircle } from "../color_circle/ColorCircle";

export const Favorites = () => {
  const [favorites, setFavorites] = useState([]);
  useEffect(() => {
    let currentFavorites = JSON.parse(localStorage.getItem("brief")) || [];
    setFavorites(currentFavorites);
  }, []);
  return (
    <>
      <h1 className="headline-text">
        <span>Favorites List</span>
      </h1>

      {favorites.map((brief) => (
        <Card>
          <div key={brief.seed}>
            <h2>{brief.title}</h2>
            <Tags difficulty={brief.difficulty} type={brief.type}></Tags>
            <div className="color-line">
              <ColorCircle color={brief.color1} showCode={false} />
              <ColorCircle color={brief.color2} showCode={false} />
              <ColorCircle color={brief.color3} showCode={false} />
              <ColorCircle color={brief.color4} showCode={false} />
              <ColorCircle color={brief.color5} showCode={false} />
            </div>
            <h3>Description</h3>
            <p>{brief.description}</p>
          </div>
        </Card>
      ))}
    </>
  );
};
