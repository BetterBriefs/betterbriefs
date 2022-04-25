import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import logoUrl from "../../logo.svg";

export const Header = ({ user }) => (
  <div className="header">
    <img src={logoUrl} alt="Tesla" />
    <div>
      <Link to="/sign-in">Login</Link>
      <Link to="/">MyList</Link>
      {user && <Link to={`/profile/${user.uid}`}>Profile</Link>}
    </div>
  </div>
);
