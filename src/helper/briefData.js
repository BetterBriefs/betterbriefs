import { useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase-config";
export const useData = () => {
  // database
  const colorsCollectionRef = collection(db, "colors");
  const fontsCollectionRef = collection(db, "fonts");
  const ideasCollectionRef = collection(db, "ideas");
  const layoutsCollectionRef = collection(db, "layouts");
  const personasCollectionRef = collection(db, "personas");
  // all data for brief creation
  const [colors, setColors] = useState([]);
  const [fonts, setFonts] = useState([]);
  const [ideas, setIdeas] = useState([]);
  const [personas, setPersonas] = useState([]);
  const [layouts, setLayouts] = useState([]);

  const getColors = async () => {
    const data = await getDocs(colorsCollectionRef);
    const parsedData = data.docs.map(doc => ({ ...doc.data(), id: doc.id }));
    setColors(parsedData);
  };

  const getFonts = async () => {
    const data = await getDocs(fontsCollectionRef);
    const parsedData = data.docs.map(doc => ({ ...doc.data(), id: doc.id }));
    setFonts(parsedData);
  };

  const getIdeas = async () => {
    const data = await getDocs(ideasCollectionRef);
    const parsedData = data.docs.map(doc => ({ ...doc.data(), id: doc.id }));
    setIdeas(parsedData);
  };

  const getLayouts = async () => {
    const data = await getDocs(layoutsCollectionRef);
    const parsedData = data.docs.map(doc => ({ ...doc.data(), id: doc.id }));
    setLayouts(parsedData);
  };

  const getPersonas = async () => {
    const data = await getDocs(personasCollectionRef);
    const parsedData = data.docs.map(doc => ({ ...doc.data(), id: doc.id }));
    setPersonas(parsedData);
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
    getData
  };
};

export function getBrief(colors, fonts, personas, ideas, layouts, difficulty){
  let lengthColors = colors.length;
  let lengthFonts = fonts.length;
  let lengthPersonas = personas.length;

  // get random indices for each dataset and set data
  let randomColorIndex = Math.floor(Math.random() * lengthColors) + 1;
  let randomFontIndex = Math.floor(Math.random() * lengthFonts) + 1;
  let randomPersonaIndex = Math.floor(Math.random() * lengthPersonas) + 1;

  // filter ideas based on selected difficulty
  let filteredIdeas = ideas.filter(idea => idea.difficulty === difficulty);
  let lengthIdeas = filteredIdeas.length;
  let randomIdeaIndex = Math.floor(Math.random() * lengthIdeas);

  // type of idea and layout must match
  let idea = filteredIdeas[randomIdeaIndex];

  let filteredLayouts = layouts.filter(layout => layout.type === idea.type);
  let lengthLayouts = filteredLayouts.length;
  let randomLayoutIndex = Math.floor(Math.random() * lengthLayouts);

  const brief = {
    color: colors.find(color => color.id === randomColorIndex.toString()),
    font: fonts.find(font => font.id === randomFontIndex.toString()),
    persona: personas.find(
      persona => persona.id === randomPersonaIndex.toString()
    ),
    idea: idea,
    layout: filteredLayouts[randomLayoutIndex],
    seed: `c${randomColorIndex}f${randomFontIndex}i${idea.id}l${filteredLayouts[randomLayoutIndex].id}p${randomPersonaIndex}`
  }
  return brief;
}