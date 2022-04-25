import React, { useState, useEffect } from "react";
import { ref, getDownloadURL } from "firebase/storage";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { storage, db } from "../../firebase-config";
import { collection, getDocs, addDoc, doc } from "firebase/firestore";
import { Button } from "../button/Button";

export const Brief = ({ user }) => {
  const navigate = useNavigate();
  let { colorid, fontid, ideaid, layoutid, personaid } = useParams();

  const [layoutUrl, setLayoutUrl] = useState([]);

  // all data for brief creation
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

  useEffect(() => {
    getColors();
    getFonts();
    getIdeas();
    getLayouts();
    getPersonas();
  }, []);

  // check if params are in url
  // if yes set states to generated brief from url
  useEffect(() => {
    if (colorid && fontid && ideaid && layoutid && personaid) {
      setColor(colors.find((color) => color.id === colorid));
      setFont(fonts.find((font) => font.id === fontid.toString()));
      setIdea(ideas.find((idea) => idea.id === ideaid.toString()));
      setLayout(layouts.find((layout) => layout.id === layoutid.toString()));
      setPersona(
        personas.find((persona) => persona.id === personaid.toString())
      );
    }
  }, [
    color,
    colorid,
    colors,
    fontid,
    fonts,
    ideaid,
    ideas,
    layoutid,
    layouts,
    personaid,
    personas,
  ]);

  // if brief states are available, set BriefGenerated to true, so brief will be rendered
  useEffect(() => {
    if (color && font && idea && layout && persona) {
      console.log("they are  set");
      setBriefGenerated(true);
    } else {
      console.log("not here yet");
    }
  }, [color, font, idea, layout, persona]);

  function generateBrief() {
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
      `/${randomColorIndex}/${randomFontIndex}/${randomIdeaIndex}/${randomLayoutIndex}/${randomPersonaIndex}`
    );
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

  // add generated brief as draft to user's projects when logged in
  function createProjectDraft() {
    //TODO: check if loggedIn
    if (user) {
      createProject();
      alert("was successfully added to projects as draft");
    } else {
      alert("login first");
    }
    //TODO: Dialog which says that project draft was added to profile
  }

  async function createProject() {
    await addDoc(collection(db, "projects"), {
      userId: user.uid,
      color: doc(db, "colors", color.id),
      font: doc(db, "fonts", font.id),
      idea: doc(db, "ideas", idea.id),
      layout: doc(db, "layouts", layout.id),
      persona: doc(db, "personas", persona.id),
      thumbnail:
        "gs://betterbriefs-8b032.appspot.com/assets/default_project.png",
      published: false,
      title: "Project Title",
      repo_link: "",
      description: "",
    });
  }

  return (
    <>
      <Button onClick={generateBrief}>Generate</Button>
      {briefGenerated === true && (
        <>
          <Button onClick={createProjectDraft}>Add to profile</Button>
          <div>
            <b>Persona:</b>
          </div>
          <div>Name: {persona.name}</div>
          <div>Age: {persona.age}</div>
          <div>About: {persona.age}</div>
          <div>Sex: {persona.sex}</div>

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
          <img src={layoutUrl} alt="layout"></img>
        </>
      )}
    </>
  );
};
