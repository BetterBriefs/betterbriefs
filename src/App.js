import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { BriefData } from "./components/brief/BriefData";
import { Header } from "./components/header/Header";
import { Footer } from "./components/footer/Footer";
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
          </Routes>
          <Footer />
        </BrowserRouter>
      </ThemeProvider>
    </div>
  );
}

export default App;
