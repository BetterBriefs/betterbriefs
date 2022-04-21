import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { SignInForm } from "./components/login/SignInForm";
import { SignUpForm } from "./components/signup/SignUpForm";
import { Button } from "./components/button/Button";
import { Brief } from "./components/brief/Brief";

import { collection, getDocs } from "firebase/firestore";
import { auth, db } from "./firebase-config";

import "./App.css";

function App() {
  const [user, setUser] = useState("");

  // to handle the current logged in user in time
  useEffect(() => {
    auth.onAuthStateChanged((user) => setUser(user));
  }, []);

  // all data for brief creation
  const [colors, setColors] = useState([]);
  const [fonts, setFonts] = useState([]);
  const [ideas, setIdeas] = useState([]);
  const [personas, setPersonas] = useState([]);
  const [layouts, setLayouts] = useState([]);

  // stored generated brief
  const [color, setColor] = useState([]);
  const [font, setFont] = useState([]);
  const [idea, setIdea] = useState([]);
  const [persona, setPersona] = useState([]);
  const [layout, setLayout] = useState([]);

  // flag if a brief is generated or not
  const [briefGenerated, setBriefGenerated] = useState([false]);

  useEffect(() => {
    getColors();
    getFonts();
    getIdeas();
    getLayouts();
    getPersonas();
  }, []);

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

    setBriefGenerated(true);
  }
  return (
    <div className="App">
      <header className="App-header">
        <Button onClick={generateBrief}>Generate</Button>

        {briefGenerated === true && (
          <Brief
            color={color}
            font={font}
            idea={idea}
            layout={layout}
            persona={persona}
          ></Brief>
        )}

        <Router>
          <Routes>
            <Route path="/sign-in" element={<SignInForm user={user} />} />
            <Route path="/sign-up" element={<SignUpForm user={user} />} />
          </Routes>
        </Router>
      </header>
    </div>
  );
}

export default App;
