import React from "react";
import logo from "../accet/logo-bg.png";
import Account from "./Account";
import "./styles/Nav.css";

export default function Nav() {
  return (
    <nav className="nav">
      <ul>
        <li>
          <a href="index.html" className="brand">
            <img src={logo} alt="Learn with Sumit Logo" />
            <h3>Learn with Sumit</h3>
          </a>
        </li>
      </ul>
      <Account />
    </nav>
  );
}
