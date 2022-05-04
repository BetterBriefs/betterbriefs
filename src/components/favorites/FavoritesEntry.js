import React, { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { Card } from "../card/Card";
import { Tags } from "../tags/Tags";
import { ColorCircle } from "../color_circle/ColorCircle";
import { Button } from "../button/Button";
import "./FavoritesEntry.css";

export const FavoritesEntry = ({ entry, onRemove }) => {
  const navigate = useNavigate();

  const navToBrief = useCallback(() => navigate(`/${entry.seed}`), [
    entry,
    navigate,
  ]);

  return (
    <Card>
      <div className="favorite__container" key={entry.seed}>
        <h2 className="title">{entry.title}</h2>
        <div className="actions">
          <Button usage="primary" onClick={navToBrief}>
            Read More
          </Button>
          <Button usage="secondary" onClick={() => onRemove(entry.seed)}>
            Remove
          </Button>
        </div>
        <div className="tags">
          <Tags difficulty={entry.difficulty} type={entry.type}></Tags>
        </div>

        <div className="colors color-line">
          <ColorCircle color={entry.color1} showCode={false} />
          <ColorCircle color={entry.color2} showCode={false} />
          <ColorCircle color={entry.color3} showCode={false} />
          <ColorCircle color={entry.color4} showCode={false} />
          <ColorCircle color={entry.color5} showCode={false} />
        </div>
        <div className="description">
          <h3>Description</h3>
          <p class="favorites__short-description">{entry.description}</p>
          <p className="seed">ID: {entry.seed}</p>
        </div>
      </div>
    </Card>
  );
};
