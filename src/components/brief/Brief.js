import React from "react";
import { Button } from "../button/Button";
import { Wireframe } from "../wireframe/Wireframe";
import { Persona } from "../persona/Persona";
import { Idea } from "../idea/Idea";
import { ColorPalette } from "../color_palette/ColorPalette";
import { Fonts } from "../fonts/Fonts";
import "./Brief.css";

export const Brief = ({
  onGenerateBrief,
  brief,
  briefGenerated,
  layoutUrl,
  personaUrl,
  setDifficulty,
}) => {
  return (
    <div className="main-container">
      <section className="hero">
        <h1 className="hero__header-text">
          <span>Project Brief</span>
          <br />
          <span>Generator</span>
        </h1>
        {briefGenerated === false && (
          <p>
            Choose your difficulty level and generate your briefing
            <br />
            to start coding an awesome project immediately.
          </p>
        )}
        <div className="hero__buttons-container">
          <select
            name="difficulty"
            id="difficulty"
            defaultValue="simple"
            onChange={(e) => setDifficulty(e.target.value)}
          >
            <option value="easy">Easy</option>
            <option value="normal">Normal</option>
            <option value="advanced">Advanced</option>
          </select>
          <Button onClick={onGenerateBrief}>Generate</Button>
        </div>
      </section>
      {briefGenerated === true && (
        <>
          <Idea idea={brief.idea}></Idea>
          <Persona personaUrl={personaUrl} persona={brief.persona}></Persona>
          <div className="brief__colors-and-fonts">
            <ColorPalette colors={brief.color}></ColorPalette>
            <Fonts fonts={brief.font}></Fonts>
          </div>
          <Wireframe layoutUrl={layoutUrl}> </Wireframe>
        </>
      )}
    </div>
  );
};
