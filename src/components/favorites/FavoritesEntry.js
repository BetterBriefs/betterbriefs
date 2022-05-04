import React from "react";
import { Card } from "../card/Card";
import { Tags } from "../tags/Tags";
import { ColorCircle } from "../color_circle/ColorCircle";
import { Button } from "../button/Button";
import "./FavoritesEntry.css";

export const FavoritesEntry = ({ entry, onRemove }) => {
  return (
    <Card>
      <div key={entry.seed}>
        <div class="favorites__card-headline">
          <h2>{entry.title}</h2>
          <Button usage="secondary" onClick={() => onRemove(entry.seed)}>
            Remove
          </Button>
        </div>

        <Tags difficulty={entry.difficulty} type={entry.type}></Tags>
        <div className="color-line">
          <ColorCircle color={entry.color1} showCode={false} />
          <ColorCircle color={entry.color2} showCode={false} />
          <ColorCircle color={entry.color3} showCode={false} />
          <ColorCircle color={entry.color4} showCode={false} />
          <ColorCircle color={entry.color5} showCode={false} />
        </div>
        <h3>Description</h3>
        <p>{entry.description}</p>
        <p className="seed">ID: {entry.seed}</p>
      </div>
    </Card>
  );
};
