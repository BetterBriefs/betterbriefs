import React, { useState, useEffect } from "react";
import { FavoritesEntry } from "./FavoritesEntry";
import "./Favorites.css";

export const Favorites = () => {
  const [favorites, setFavorites] = useState([]);
  useEffect(() => {
    let currentFavorites = JSON.parse(localStorage.getItem("brief")) || [];
    setFavorites(currentFavorites);
  }, []);

  function removeFavorite(seed) {
    let data = favorites.filter((entry) => entry.seed !== seed);
    localStorage.setItem("brief", JSON.stringify(data));
    setFavorites(data);
  }

  return (
    <div className="main-container">
      <h1 className="headline-text favorites-headline">
        <span>Favorites List</span>
      </h1>
      {favorites.length > 0 ? (
        favorites.map((brief) => (
          <FavoritesEntry entry={brief} onRemove={removeFavorite} />
        ))
      ) : (
        <p className="empty-list-text">No entries here yet.</p>
      )}
    </div>
  );
};
