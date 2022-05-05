import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { BriefData } from "./components/brief/BriefData";
import { Imprint } from "./static/imprint/Imprint";
import { About } from "./static/about/About";
import { Privacy } from "./static/privacy/Privacy";
import { Header } from "./components/header/Header";
import { Footer } from "./components/footer/Footer";
import { Favorites } from "./components/favorites/Favorites";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./Theme";
import { useData } from "./helper/useData";
import "./App.css";

function App({ useDataHook = useData }) {
  const { colors, fonts, ideas, personas, layouts, getData } = useDataHook();

  const [favorites, setFavorites] = useState(
    JSON.parse(localStorage.getItem("brief")) || []
  );

  // load data initially
  useEffect(() => {
    getData();
    console.log("data");
  }, []);
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Header favorites={favorites} />
          <Routes>
            <Route
              path="/"
              element={
                <BriefData
                  onFavoritesChange={setFavorites}
                  colors={colors}
                  fonts={fonts}
                  ideas={ideas}
                  personas={personas}
                  layouts={layouts}
                />
              }
            />
            <Route
              path="/:seed"
              element={
                <BriefData
                  onFavoritesChange={setFavorites}
                  colors={colors}
                  fonts={fonts}
                  ideas={ideas}
                  personas={personas}
                  layouts={layouts}
                />
              }
            />
            <Route
              path="/favorites"
              element={
                <Favorites
                  favorites={favorites}
                  onFavoritesChange={setFavorites}
                />
              }
            />
            <Route path="/imprint" element={<Imprint />} />
            <Route path="/about" element={<About />} />
            <Route path="/privacy" element={<Privacy />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </ThemeProvider>
    </div>
  );
}

export default App;
