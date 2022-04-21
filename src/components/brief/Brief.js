import React, { useState, useEffect } from "react";
import { ref, getDownloadURL } from "firebase/storage";
import { storage } from "../../firebase-config";

export const Brief = ({ color, font, idea, persona, layout }) => {
  const [layoutUrl, setLayoutUrl] = useState([]);

  const path = ref(storage, layout.link);

  //get layout image to show in brief
  useEffect(() => {
    getDownloadURL(path).then((url) => {
      // Insert url into an <img> tag
      setLayoutUrl(url);
    });
  }, [path]);

  return (
    <>
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
        {font.paragraph_font}: {font.paragraph_link} <br></br> {font.title_font}
        : {font.title_link}
      </div>

      <br></br>
      <div>
        <b>Layout:</b>
      </div>
      <div>Link: {layout.link}</div>
      <img src={layoutUrl} alt="layout"></img>
    </>
  );
};
