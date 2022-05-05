import React, { useCallback } from "react";
import { FavoritesEntry } from "./favorites_entry/FavoritesEntry";
import emptyfolderurl from "../../media/Empty_Folder.svg";
import "./Favorites.css";

function Favorites({ favorites, onFavoritesChange }) {
  const removeFavorite = useCallback(
    (seed) => {
      let data = favorites.filter((entry) => entry.seed !== seed);
      localStorage.setItem("brief", JSON.stringify(data));
      onFavoritesChange(data);
    },
    [favorites, onFavoritesChange]
  );

  return (
    <div className="main-container">
      <h1 className="headline-text favorites-headline">
        <span>Favorites List</span>
      </h1>
      {favorites.length > 0 ? (
        favorites.map((brief) => (
          <React.Fragment key={brief.seed}>
            <FavoritesEntry entry={brief} onRemove={removeFavorite} />
          </React.Fragment>
        ))
      ) : (
        <>
          <p className="empty-list-text">No entries here yet.</p>
          <img
            className="imprint-container__Team__member__img"
            src={emptyfolderurl + ""}
            alt="no items found here"
          ></img>
        </>
      )}
    </div>
  );
}

export default React.memo(Favorites);
