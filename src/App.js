import React from "react";
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
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<BriefData />} />
            <Route path="/:seed" element={<BriefData />} />
            <Route path="/favorites" element={<Favorites />} />
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
