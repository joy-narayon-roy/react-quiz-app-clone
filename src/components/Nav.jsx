import React from "react";
import { Link } from "react-router-dom";
import logo from "../accet/logo-bg.png";
import Account from "./Account";
import "./styles/Nav.css";

export default function Nav() {
  return (
    <nav className="nav">
      <ul>
        <li>
          <Link to="/" className="brand">
            <img src={logo} alt="Learn with Sumit Logo" />
            <h3>Learn with Sumit</h3>
          </Link>
        </li>
      </ul>
      <Account />
    </nav>
  );
}
