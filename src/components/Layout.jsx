import React from "react";
import Nav from "./Nav";
import "./styles/Layout.css";

export default function Layout({ children }) {
  return (
    <>
      <Nav />
      <main className="main">
        <div className="container">{children}</div>
      </main>
    </>
  );
}
