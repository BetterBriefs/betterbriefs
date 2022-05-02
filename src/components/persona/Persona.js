import React from "react";
import { Card } from "../card/Card";
import "./Persona.css";

export const Persona = ({ personaUrl, persona }) => {
  let personaSex = "male";
  if (persona.sex) {
    personaSex = "female";
  }

  return (
    <Card>
      <h2>Persona</h2>
      <div class="persona">
        <img class="persona_avatar" src={personaUrl} alt="layout"></img>
        <div class="persona_description">
          <h3>{persona.name}</h3>
          <div class="persona_tags">
            <h4>Age</h4> {persona.age} | <h4>Sex</h4> {personaSex}
          </div>
          <h4>About</h4>
          <p>{persona.about}</p>
        </div>
      </div>
    </Card>
  );
};
