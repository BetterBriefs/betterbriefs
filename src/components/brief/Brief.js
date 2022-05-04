import React from "react";
import { Button } from "../button/Button";
import { Wireframe } from "../wireframe/Wireframe";
import { Persona } from "../persona/Persona";
import { Idea } from "../idea/Idea";
import { ColorPalette } from "../color_palette/ColorPalette";
import { Fonts } from "../fonts/Fonts";
import { Select } from "../select/Select";
import { ShareableLink } from "../shareable_link/ShareableLink";
import "./Brief.css";

export const Brief = ({
  onGenerateBrief,
  brief,
  briefGenerated,
  layoutUrl,
  personaUrl,
  setDifficulty
}) => {
  let pageurl = window.location.href;
  return (
    <div className={briefGenerated ? "main-container brief-container generated-brief":"main-container brief-container"}>
      <section className="hero">
        <h1 className="hero__header-text">
          <span>Project Brief</span>
          <br/>
          <span>Generator</span>
        </h1>
        <i className="hidden-page-link">Project link: {pageurl}</i>
        {briefGenerated === false && (
          <p>
            Choose your difficulty level and generate your briefing
            <br />
            to start coding an awesome project immediately.
          </p>
        )}
        <div className="hero__buttons-container">
          <Select setDifficulty={setDifficulty}></Select>
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
          <div className="sidenav">
            <ShareableLink />
          </div>
        </>
      )}
    </div>
  );
};
