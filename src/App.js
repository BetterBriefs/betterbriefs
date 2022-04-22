import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SignInForm } from "./components/login/SignInForm";
import { SignUpForm } from "./components/signup/SignUpForm";
import { Brief } from "./components/brief/Brief";
import { auth } from "./firebase-config";

import "./App.css";

function App() {
  const [user, setUser] = useState("");

  // to handle the current logged in user in time
  useEffect(() => {
    auth.onAuthStateChanged((user) => setUser(user));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
            <Routes>
              <Route path="/" element={<Brief />} />
              <Route path="/:colorid/:fontid/:ideaid/:layoutid/:personaid" element={<Brief />} />
              <Route path="/sign-in" element={<SignInForm user={user} />} />
              <Route path="/sign-up" element={<SignUpForm user={user} />} />
            </Routes>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
