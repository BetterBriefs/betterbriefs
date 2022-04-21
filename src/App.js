import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { SignInForm } from './components/login/SignInForm';
import { SignUpForm } from './components/signup/SignUpForm';

import { auth } from './firebase-config'

import logo from './logo.svg';
import './App.css';

function App() {
  const [user, setUser] = useState('')

  // to handle the current logged in user in time
  useEffect(() => {
    auth.onAuthStateChanged((user) => setUser(user))
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Router>
        <Routes>
            <Route path="/sign-in" element={<SignInForm user={user}/>}/>
            <Route path="/sign-up" element={<SignUpForm user={user}/>}/>
        </Routes>
      </Router>
      </header>
    </div>
  );
}

export default App;
