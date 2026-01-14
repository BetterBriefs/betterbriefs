import React, { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { Card } from "../../atoms/card/Card";
import { Tags } from "../../atoms/tags/Tags";
import { ColorCircle } from "../../atoms/color_circle/ColorCircle";
import { Button } from "../../atoms/button/Button";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import "./FavoritesEntry.css";

export const FavoritesEntry = ({ entry, onRemove }) => {

  const navigate = useNavigate();

  function copyToClipboard(text) {
    navigator.clipboard.writeText(text);
  }
  const navToBrief = useCallback(() => navigate(`/${entry.seed}`), [
    entry,
    navigate
  ]);

  return (
    <Card>
      <div className="favorite__container">
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
          <ColorCircle color={entry.color1} />
          <ColorCircle color={entry.color2} />
          <ColorCircle color={entry.color3} />
          <ColorCircle color={entry.color4} />
          <ColorCircle color={entry.color5} />
        </div>
        <div className="description">
          <h3>Description</h3>
          <p className="favorites__short-description">{entry.description}</p>
          <p className="seed">
            ID: {entry.seed}{" "}
            <span onClick={() => copyToClipboard(window.location.origin + "/" + entry.seed)}>
              <ContentCopyIcon />
            </span>
          </p>
        </div>
      </div>
    </Card>
  );
};
