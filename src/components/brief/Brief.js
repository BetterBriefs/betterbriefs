import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ref, getDownloadURL } from "firebase/storage";
import { storage, db } from "../../firebase-config";
import { collection, getDocs } from "firebase/firestore";
import { Button } from "../button/Button";
import "./Brief.css";

export const Brief = () => {
  const navigate = useNavigate();
  let { seed } = useParams();

  const [layoutUrl, setLayoutUrl] = useState([]);
  const [personaUrl, setPersonaUrl] = useState([]);

  // all data for brief creation
  // TODO: maybe not load full db, just pick random entries (length of dbs is needed, also project types need to be checked)
  const [colors, setColors] = useState([]);
  const [fonts, setFonts] = useState([]);
  const [ideas, setIdeas] = useState([]);
  const [personas, setPersonas] = useState([]);
  const [layouts, setLayouts] = useState([]);

  // flag if a brief is generated or not
  const [briefGenerated, setBriefGenerated] = useState([false]);

  // stored generated brief
  const [color, setColor] = useState(undefined);
  const [font, setFont] = useState(undefined);
  const [idea, setIdea] = useState(undefined);
  const [persona, setPersona] = useState(undefined);
  const [layout, setLayout] = useState(undefined);

  // database
  const colorsCollectionRef = collection(db, "colors");
  const fontsCollectionRef = collection(db, "fonts");
  const ideasCollectionRef = collection(db, "ideas");
  const layoutsCollectionRef = collection(db, "layouts");
  const personasCollectionRef = collection(db, "personas");

  async function getColors() {
    const data = await getDocs(colorsCollectionRef);
    const parsedData = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
    setColors(parsedData);
  }

  async function getFonts() {
    const data = await getDocs(fontsCollectionRef);
    const parsedData = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
    setFonts(parsedData);
  }

  async function getIdeas() {
    const data = await getDocs(ideasCollectionRef);
    const parsedData = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
    setIdeas(parsedData);
  }

  async function getLayouts() {
    const data = await getDocs(layoutsCollectionRef);
    const parsedData = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
    setLayouts(parsedData);
  }

  async function getPersonas() {
    const data = await getDocs(personasCollectionRef);
    const parsedData = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
    setPersonas(parsedData);
  }


  // check if params are in url
  // if yes set states to generated brief from url
  useEffect(() => {
    if (seed) {
      let colorid = getIdOfParam("c");
      let fontid = getIdOfParam("f");
      let ideaid = getIdOfParam("i");
      let layoutid = getIdOfParam("l");
      let personaid = getIdOfParam("p");
      setColor(colors.find((color) => color.id === colorid));
      setFont(fonts.find((font) => font.id === fontid.toString()));
      setIdea(ideas.find((idea) => idea.id === ideaid.toString()));
      setLayout(layouts.find((layout) => layout.id === layoutid.toString()));
      setPersona(
        personas.find((persona) => persona.id === personaid.toString())
      );
    } else {
      setColor(undefined);
      setFont(undefined);
      setIdea(undefined);
      setPersona(undefined);
      setLayout(undefined);
      setBriefGenerated(false);
    }
  }, [color, colors, fonts, ideas, layouts, personas, seed]);

  // if brief states are available, set BriefGenerated to true, so brief will be rendered
  useEffect(() => {
    if (color && font && idea && layout && persona) {
      setBriefGenerated(true);
    }
  }, [color, font, idea, layout, persona]);

  // TODO: check that layout and project type matches
  async function generateBrief() {
    await getColors();
    await getFonts();
    await getIdeas();
    await getLayouts();
    await getPersonas();

    // get length of each dataset to choose a random index that will be used
    let lengthColors = colors.length;
    let lengthFonts = fonts.length;
    let lengthIdeas = ideas.length;
    let lengthLayouts = layouts.length;
    let lengthPersonas = personas.length;

    // get random indices for each dataset
    let randomColorIndex = Math.floor(Math.random() * lengthColors) + 1;
    let randomFontIndex = Math.floor(Math.random() * lengthFonts) + 1;
    let randomIdeaIndex = Math.floor(Math.random() * lengthIdeas) + 1;
    let randomLayoutIndex = Math.floor(Math.random() * lengthLayouts) + 1;
    let randomPersonaIndex = Math.floor(Math.random() * lengthPersonas) + 1;

    // set random data
    setColor(colors.find((color) => color.id === randomColorIndex.toString()));
    setFont(fonts.find((font) => font.id === randomFontIndex.toString()));
    setIdea(ideas.find((idea) => idea.id === randomIdeaIndex.toString()));
    setLayout(
      layouts.find((layout) => layout.id === randomLayoutIndex.toString())
    );
    setPersona(
      personas.find((persona) => persona.id === randomPersonaIndex.toString())
    );
    navigate(
      `/c${randomColorIndex}f${randomFontIndex}i${randomIdeaIndex}l${randomLayoutIndex}p${randomPersonaIndex}`
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
    if (layout) {
      const path = ref(storage, layout.link);

      getDownloadURL(path).then((url) => {
        // Insert url into an <img> tag
        setLayoutUrl(url);
      });
    }
  }, [layout]);

  //load persona image from firebase storage and render
  useEffect(() => {
    if (persona) {
      const path = ref(storage, persona.avatar);

      getDownloadURL(path).then((url) => {
        // Insert url into an <img> tag
        setPersonaUrl(url);
      });
    }
  }, [persona]);

  return (
    <>
      <section class="hero">
        <h1 class="hero__header-text">Project Brief<br/>Generator</h1>
        <p>Choose your difficulty level and generate your briefing<br/>to start coding an awesome project immediately.</p>
        <div class="hero__buttons-container">
          <Button onClick={generateBrief}>Generate</Button>
          <Button onClick={generateBrief}>Generate</Button>
        </div>
      </section>
      {briefGenerated === true && (
        <>
          <div>
            <b>Persona:</b>
          </div>
          <div>Name: {persona.name}</div>
          <div>Age: {persona.age}</div>
          <div>About: {persona.age}</div>
          <div>Sex: {persona.sex}</div>
          <img src={personaUrl} alt="persona" width="50"></img>

          <br></br>
          <div>
            <b>Idea:</b>
          </div>
          <div>Title: {idea.title}</div>
          <div>Type: {idea.type}</div>
          <div>Description: {idea.description}</div>
          <div>Difficulty: {idea.difficulty}</div>

          <br></br>
          <b>Colors: </b>
          <div>
            {color.color1} {color.color2} {color.color3} {color.color4}{" "}
            {color.color5}
          </div>

          <br></br>
          <div>
            <b>Fonts:</b>
          </div>
          <div>
            {font.paragraph_font}: {font.paragraph_link} <br></br>{" "}
            {font.title_font}: {font.title_link}
          </div>

          <br></br>
          <div>
            <b>Layout:</b>
          </div>
          <div>Link: {layout.link}</div>
          <img src={layoutUrl} alt="layout" width="500"></img>
        </>
      )}
    </>
  );
};
