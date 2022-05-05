import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Button } from "../button/Button";
import { Wireframe } from "../wireframe/Wireframe";
import { Persona } from "../persona/Persona";
import Idea from "../idea/Idea";
import { ColorPalette } from "../color_palette/ColorPalette";
import { Fonts } from "../fonts/Fonts";
import { Select } from "../select/Select";
import { ShareableLink } from "../shareable_link/ShareableLink";
import { PrintBrief } from "../print_brief/Print_brief";
import { AddToFavorites } from "../add_to_favorites/AddToFavorites";
import { ShimmerRectangle } from "../shimmer/ShimmerRectangle";

import "./Brief.css";

export const Brief = ({
  onGenerateBrief,
  brief,
  briefGenerated,
  layoutUrl,
  personaUrl,
  setDifficulty,
  allColors,
  fontsLength,
  onFavoritesChange,
}) => {
  let titleFont, paragraphFont;
  if (briefGenerated === true) {
    titleFont =
      "https://fonts.googleapis.com/css2?family=" +
      brief.font.title_font.slice(brief.font.title_font.lastIndexOf("/") + 1);
    paragraphFont =
      "https://fonts.googleapis.com/css2?family=" +
      brief.font.paragraph_font.slice(
        brief.font.paragraph_font.lastIndexOf("/") + 1
      );
  }
  let pageurl = window.location.href;

  return (
    <div
      className={
        briefGenerated
          ? "main-container brief-container generated-brief"
          : "main-container brief-container"
      }
    >
      <section className="hero">
        <h1 className="headline-text">
          <span>Project Brief</span>
          <br />
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
      { briefGenerated === true
        ?
        <>
          <HelmetProvider>
            <Helmet>
              <link href={titleFont} rel="stylesheet" />
              <link href={paragraphFont} rel="stylesheet" />
            </Helmet>
          </HelmetProvider>
          <Idea idea={brief.idea}></Idea>
          <Persona personaUrl={personaUrl} persona={brief.persona}></Persona>
          <div className="brief__colors-and-fonts">
            <ColorPalette
              colors={brief.color}
              allColors={allColors}
            ></ColorPalette>
            <Fonts fonts={brief.font} fontsLength={fontsLength}></Fonts>
          </div>
          <Wireframe layoutUrl={layoutUrl}> </Wireframe>
          <div className="sidenav">
            <ShareableLink />
            <PrintBrief />
            <AddToFavorites
              brief={brief}
              onFavoritesChange={onFavoritesChange}
          />
        </div>
        </>
        :
        (
        <>
          {window.location.pathname !== "/" && (
            <>
            <ShimmerRectangle />
            <ShimmerRectangle />
            <ShimmerRectangle />
            </>
            )} 
        </>
        )
      }
    </div>
  );
};
