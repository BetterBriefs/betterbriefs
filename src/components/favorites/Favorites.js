import React, { useState, useEffect } from "react";
import { Card } from "../card/Card";
import { Tags } from "../tags/Tags";
import { ColorCircle } from "../color_circle/ColorCircle";
import "./Favorites.css";

export const Favorites = () => {
  const [favorites, setFavorites] = useState([]);
  useEffect(() => {
    let currentFavorites = JSON.parse(localStorage.getItem("brief")) || [];
    setFavorites(currentFavorites);
  }, []);
  return (
    <div className="main-container">
      <h1 className="headline-text">
        <span>Favorites List</span>
      </h1>
      {favorites.length > 0 ? (
        favorites.map((brief) => (
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
              <p className="seed">ID: {brief.seed}</p>
            </div>
          </Card>
        ))
      ) : (
        <p className="empty-list-text">No entries here yet.</p>
      )}
    </div>
  );
};
