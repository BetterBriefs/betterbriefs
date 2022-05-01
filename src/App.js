import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Brief } from "./components/brief/Brief";
import { Header } from "./components/header/Header";
import { Footer } from "./components/footer/Footer";

import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Brief />} />
          <Route path="/:seed" element={<Brief />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
