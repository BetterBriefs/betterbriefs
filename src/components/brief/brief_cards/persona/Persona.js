import React from "react";
import { Card } from "../../../atoms/card/Card";
import "./Persona.css";
import LazyImage from "../../../functional/image/Image";

export const Persona = ({ persona }) => {
  const personaSex = persona.sex ? "female" : "male";

  return (
    <Card>
      <h2>Persona</h2>
      <div className="persona">
        <LazyImage
          className="persona_avatar"
          src={persona.avatar}
          alt="Persona"
          fallback="circle"
        />
        <div className="persona_description">
          <h3>{persona.name}</h3>
          <div className="persona_tags">
            <h4>Age</h4> <span>{persona.age}</span> | <h4>Sex</h4>{" "}
            <span>{personaSex}</span>
          </div>
          <h4>About</h4>
          <p>{persona.about}</p>
        </div>
      </div>
    </Card>
  );
};
