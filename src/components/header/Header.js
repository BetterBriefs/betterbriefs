import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import logoUrl from "../../logo.svg";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase-config";
import { Button } from "../button/Button";

async function logoutUser() {
  signOut(auth)
    .then(() => {
      console.log("logout");
    })
    .catch(() => {
      alert("logout went wrong");
    });
}

export const Header = ({ user }) => (
  <div className="header">
    <img src={logoUrl} alt="Tesla" />
    <div>
      {user && <Button onClick={logoutUser}>Logout</Button>}
      {!user && <Link to="/sign-in">Login</Link>}
      <Link to="/">MyList</Link>
      {user && <Link to={`/profile/${user.uid}`}>Profile</Link>}
    </div>
  </div>
);
