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
