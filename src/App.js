import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { BriefData } from "./components/brief/BriefData";
import { Imprint } from "./components/imprint/Imprint";
import { About } from "./components/about/About";
import { Privacy } from "./components/privacy/Privacy";
import { Header } from "./components/header/Header";
import { Footer } from "./components/footer/Footer";
import { Favorites } from "./components/favorites/Favorites";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./Theme";
import "./App.css";

function App() {
  const [favorites, setFavorites] = useState([]);
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Header favorites={favorites} />
          <Routes>
            <Route
              path="/"
              element={<BriefData onFavoritesChange={setFavorites} />}
            />
            <Route
              path="/:seed"
              element={<BriefData onFavoritesChange={setFavorites} />}
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
