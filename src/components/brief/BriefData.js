import React, { useState, useEffect, useCallback } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Brief } from "./Brief";
import { getBrief } from "../../helper/briefData";

function BriefData({
  colors,
  fonts,
  ideas,
  personas,
  layouts,
  onFavoritesChange
}) {
  let { seed } = useParams();

  // flag if a brief is generated or not
  const [briefGenerated, setBriefGenerated] = useState(false);

  const [difficulty, setDifficulty] = useState("easy");

  // stored generated brief
  const [brief, setBrief] = useState({
    color: undefined,
    font: undefined,
    layout: undefined,
    idea: undefined,
    persona: undefined
  });

  const navigate = useNavigate();

  const getIdOfParam = useCallback(
    type => {
      switch (type) {
        case "c":
          return seed.substring(seed.indexOf("c") + 1, seed.lastIndexOf("f"));
        case "f":
          return seed.substring(seed.indexOf("f") + 1, seed.lastIndexOf("i"));
        case "i":
          return seed.substring(seed.indexOf("i") + 1, seed.lastIndexOf("l"));
        case "l":
          return seed.substring(seed.indexOf("l") + 1, seed.lastIndexOf("p"));
        case "p":
          return seed.substring(seed.indexOf("p") + 1);
        default:
          return 0;
      }
    },
    [seed]
  );
  // check if params are in url
  // if yes set states to generated brief from url
  useEffect(() => {
    if (seed) {
      const colorid = getIdOfParam("c");
      const fontid = getIdOfParam("f");
      const ideaid = getIdOfParam("i");
      const layoutid = getIdOfParam("l");
      const personaid = getIdOfParam("p");
      setBrief({
        color: colors.find(color => color.id === colorid),
        font: fonts.find(font => font.id === fontid.toString()),
        persona: personas.find(persona => persona.id === personaid.toString()),
        idea: ideas.find(idea => idea.id === ideaid.toString()),
        layout: layouts.find(layout => layout.id === layoutid.toString())
      });
    } else {
      setBrief({
        color: undefined,
        font: undefined,
        layout: undefined,
        idea: undefined,
        persona: undefined
      });
      setBriefGenerated(false);
    }
  }, [colors, fonts, ideas, layouts, personas, seed, getIdOfParam]);

  // if brief states are available, set BriefGenerated to true, so brief will be rendered
  useEffect(() => {
    if (
      brief.color &&
      brief.font &&
      brief.idea &&
      brief.layout &&
      brief.persona
    ) {
      setBriefGenerated(true);
    }
  }, [brief]);


  
  const generateBrief = useCallback(() => {
    const brief = getBrief(colors, fonts, personas, ideas, layouts, difficulty);
    
    if (!brief) {
      console.error("Failed to generate brief");
      alert("Unable to generate a brief. Please ensure all data is loaded.");
      return;
    }

    setBrief({
      color: brief.color,
      font: brief.font,
      persona: brief.persona,
      idea: brief.idea,
      layout: brief.layout
    });

    navigate(
      `/${brief.seed}`
    );
  }, [colors, difficulty, fonts, ideas, layouts, navigate, personas]);

  return (
    <Brief
      onGenerateBrief={generateBrief}
      brief={brief}
      briefGenerated={briefGenerated}
      setDifficulty={setDifficulty}
      colorsLength={colors.length}
      fontsLength={fonts.length}
      onFavoritesChange={onFavoritesChange}
    ></Brief>
  );
}

export default React.memo(BriefData);
