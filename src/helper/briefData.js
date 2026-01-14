import { useState } from "react";
import {
  mockColors,
  mockFonts,
  mockIdeas,
  mockLayouts,
  mockPersonas,
} from "../mockData";

export const useData = () => {
  // all data for brief creation
  const [colors, setColors] = useState([]);
  const [fonts, setFonts] = useState([]);
  const [ideas, setIdeas] = useState([]);
  const [personas, setPersonas] = useState([]);
  const [layouts, setLayouts] = useState([]);

  const getColors = async () => {
    setColors(mockColors);
  };

  const getFonts = async () => {
    setFonts(mockFonts);
  };

  const getIdeas = async () => {
    setIdeas(mockIdeas);
  };

  const getLayouts = async () => {
    setLayouts(mockLayouts);
  };

  const getPersonas = async () => {
    setPersonas(mockPersonas);
  };

  const getData = () => {
    getColors();
    getFonts();
    getIdeas();
    getLayouts();
    getPersonas();
  };

  return {
    colors,
    fonts,
    ideas,
    personas,
    layouts,
    getData,
  };
};

export function getBrief(colors, fonts, personas, ideas, layouts, difficulty) {
  let lengthColors = colors.length;
  let lengthFonts = fonts.length;
  let lengthPersonas = personas.length;

  // Validate we have data
  if (lengthColors === 0 || lengthFonts === 0 || lengthPersonas === 0) {
    console.error("Missing required data: colors, fonts, or personas");
    return null;
  }

  // get random indices for each dataset and set data
  let randomColorIndex = Math.floor(Math.random() * lengthColors) + 1;
  let randomFontIndex = Math.floor(Math.random() * lengthFonts) + 1;
  let randomPersonaIndex = Math.floor(Math.random() * lengthPersonas) + 1;

  // filter ideas based on selected difficulty
  let filteredIdeas = ideas.filter((idea) => idea.difficulty === difficulty);
  let lengthIdeas = filteredIdeas.length;

  if (lengthIdeas === 0) {
    console.error(`No ideas found for difficulty: ${difficulty}`);
    return null;
  }

  let randomIdeaIndex = Math.floor(Math.random() * lengthIdeas);
  let idea = filteredIdeas[randomIdeaIndex];

  // type of idea and layout must match
  let filteredLayouts = layouts.filter((layout) => layout.type === idea.type);
  let lengthLayouts = filteredLayouts.length;

  if (lengthLayouts === 0) {
    console.error(`No layouts found for type: ${idea.type}`);
    return null;
  }

  let randomLayoutIndex = Math.floor(Math.random() * lengthLayouts);

  const brief = {
    color: colors.find((color) => color.id === randomColorIndex.toString()),
    font: fonts.find((font) => font.id === randomFontIndex.toString()),
    persona: personas.find(
      (persona) => persona.id === randomPersonaIndex.toString()
    ),
    idea: idea,
    layout: filteredLayouts[randomLayoutIndex],
    seed: `c${randomColorIndex}f${randomFontIndex}i${idea.id}l${filteredLayouts[randomLayoutIndex].id}p${randomPersonaIndex}`,
  };
  return brief;
}
