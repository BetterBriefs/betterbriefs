import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Button } from "../atoms/button/Button";
import { Wireframe } from "./brief_cards/wireframe/Wireframe";
import { Persona } from "./brief_cards/persona/Persona";
import { Idea } from "./brief_cards/idea/Idea";
import { ColorPalette } from "./brief_cards/color_palette/ColorPalette";
import { Fonts } from "./brief_cards/fonts/Fonts";
import Select from "../atoms/select/Select";
import { ShareableLink } from "../sidenav/shareable_link/ShareableLink";
import { PrintBrief } from "../sidenav/print_brief/Print_brief";
import { AddToFavorites } from "../sidenav/add_to_favorites/AddToFavorites";
import ShimmerRectangle from "../functional/shimmer/ShimmerRectangle";

import "./Brief.css";

export const Brief = ({
  onGenerateBrief,
  brief,
  briefGenerated,
  setDifficulty,
  colorsLength,
  fontsLength,
  onFavoritesChange
}) => {
  const titleFont = briefGenerated 
  ? "https://fonts.googleapis.com/css2?family=" + brief.font.title_font.slice(brief.font.title_font.lastIndexOf("/") + 1)
  : undefined;

  const paragraphFont = briefGenerated
  ? "https://fonts.googleapis.com/css2?family=" + brief.font.paragraph_font.slice(brief.font.paragraph_font.lastIndexOf("/") + 1)
  : undefined;

  const pageurl = window.location.href;

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
        {!briefGenerated && (
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

      {briefGenerated ? (
        <>
          <HelmetProvider>
            <Helmet>
              <link href={titleFont} rel="stylesheet" />
              <link href={paragraphFont} rel="stylesheet" />
            </Helmet>
          </HelmetProvider>
          <Idea idea={brief.idea}></Idea>
          <Persona persona={brief.persona}></Persona>
          <div className="brief__colors-and-fonts">
            <ColorPalette
              colors={brief.color}
              colorsLength={colorsLength}
            ></ColorPalette>
            <Fonts fonts={brief.font} fontsLength={fontsLength}></Fonts>
          </div>
          <Wireframe layoutUrl={brief.layout.link}> </Wireframe>
          <div className="sidenav">
            <ShareableLink />
            <PrintBrief />
            <AddToFavorites
              brief={brief}
              onFavoritesChange={onFavoritesChange}
            />
          </div>
        </>
      ) : (
        <>
          {window.location.pathname !== "/" && (
            <>
              <ShimmerRectangle />
              <ShimmerRectangle />
              <ShimmerRectangle />
            </>
          )}
        </>
      )}
    </div>
  );
};
