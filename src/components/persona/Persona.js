import React from "react";
import { Card } from "../card/Card";
import "./Persona.css";
import LazyImage from "../image/Image";

export const Persona = ({ personaUrl, persona }) => {
  let personaSex = "male";
  if (persona.sex) {
    personaSex = "female";
  }

  return (
    <Card>
      <h2>Persona</h2>
<<<<<<< HEAD
      <div class="persona">
      <LazyImage className="persona_avatar" src={personaUrl} alt="Persona" fallback="fallback_circle shimmer" />
        <div class="persona_description">
=======
      <div className="persona">
        <img className="persona_avatar" src={personaUrl} alt="layout"></img>
        <div className="persona_description">
>>>>>>> 8287bf40a773ec7701510ebf52bfab5b5b0cf49e
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
