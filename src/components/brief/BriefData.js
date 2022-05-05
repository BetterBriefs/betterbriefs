import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ref, getDownloadURL } from "firebase/storage";
import { storage } from "../../firebase-config";
import { Brief } from "./Brief";
import { useData } from "../../helper/useData";

export const BriefData = ({ useDataHook = useData, onFavoritesChange }) => {
  let { seed } = useParams();
  const { colors, fonts, ideas, personas, layouts, getData } = useDataHook();

  // flag if a brief is generated or not
  const [briefGenerated, setBriefGenerated] = useState(false);

  const [difficulty, setDifficulty] = useState("easy");

  // stored generated brief
  const [brief, setBrief] = useState({
    color: undefined,
    font: undefined,
    layout: undefined,
    idea: undefined,
    persona: undefined,
  });

  const [layoutUrl, setLayoutUrl] = useState([]);
  const [personaUrl, setPersonaUrl] = useState([]);

  const navigate = useNavigate();

  // load data initially
  useEffect(() => {
    getData();
    console.log("data");
  }, []);

  // check if params are in url
  // if yes set states to generated brief from url
  useEffect(() => {
    if (seed) {
      let colorid = getIdOfParam("c");
      let fontid = getIdOfParam("f");
      let ideaid = getIdOfParam("i");
      let layoutid = getIdOfParam("l");
      let personaid = getIdOfParam("p");
      setBrief({
        color: colors.find((color) => color.id === colorid),
        font: fonts.find((font) => font.id === fontid.toString()),
        persona: personas.find(
          (persona) => persona.id === personaid.toString()
        ),
        idea: ideas.find((idea) => idea.id === ideaid.toString()),
        layout: layouts.find((layout) => layout.id === layoutid.toString()),
      });
    } else {
      setBrief({
        color: undefined,
        font: undefined,
        layout: undefined,
        idea: undefined,
        persona: undefined,
      });
      setBriefGenerated(false);
    }
  }, [colors, fonts, ideas, layouts, personas, seed, brief]);

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

  function generateBrief() {
    // get length of each dataset to choose a random index that will be used
    let lengthColors = colors.length;
    let lengthFonts = fonts.length;
    let lengthPersonas = personas.length;
    let lengthIdeas;
    let lengthLayouts;

    // get random indices for each dataset and set data
    let randomColorIndex = Math.floor(Math.random() * lengthColors) + 1;
    let randomFontIndex = Math.floor(Math.random() * lengthFonts) + 1;
    let randomPersonaIndex = Math.floor(Math.random() * lengthPersonas) + 1;
    let randomIdeaIndex;
    let randomLayoutIndex;

    // filter ideas based on selected difficulty
    let filteredIdeas = ideas.filter((idea) => idea.difficulty === difficulty);
    lengthIdeas = filteredIdeas.length;
    randomIdeaIndex = Math.floor(Math.random() * lengthIdeas);

    // type of idea and layout must match
    let idea = filteredIdeas[randomIdeaIndex];

    let filteredLayouts = layouts.filter((layout) => layout.type === idea.type);
    lengthLayouts = filteredLayouts.length;
    randomLayoutIndex = Math.floor(Math.random() * lengthLayouts);

    setBrief({
      color: colors.find((color) => color.id === randomColorIndex.toString()),
      font: fonts.find((font) => font.id === randomFontIndex.toString()),
      persona: personas.find(
        (persona) => persona.id === randomPersonaIndex.toString()
      ),
      idea: idea,
      layout: filteredLayouts[randomLayoutIndex],
    });

    navigate(
      `/c${randomColorIndex}f${randomFontIndex}i${idea.id}l${filteredLayouts[randomLayoutIndex].id}p${randomPersonaIndex}`
    );
  }

  function getIdOfParam(type) {
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
  }

  //load layout image from firebase storage and render
  useEffect(() => {
    if (brief.layout) {
      const path = ref(storage, brief.layout.link);

      getDownloadURL(path).then((url) => {
        // Insert url into an <img> tag
        setLayoutUrl(url);
      });
    }
  }, [brief.layout]);

  //load persona image from firebase storage and render
  useEffect(() => {
    if (brief.persona) {
      const path = ref(storage, brief.persona.avatar);

      getDownloadURL(path).then((url) => {
        // Insert url into an <img> tag
        setPersonaUrl(url);
      });
    }
  }, [brief.persona]);

  return (
    <Brief
      onGenerateBrief={generateBrief}
      brief={brief}
      briefGenerated={briefGenerated}
      layoutUrl={layoutUrl}
      personaUrl={personaUrl}
      setDifficulty={setDifficulty}
      allColors={colors}
      fontsLength={fonts.length}
      onFavoritesChange={onFavoritesChange}
    ></Brief>
  );
};
