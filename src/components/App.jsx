import React from "react";
import Layout from "./Layout";
import Home from "./pages/Home";
import "./styles/App.css";

export default function App() {
  return (
    <>
      <Layout>
        <Home />
      </Layout>
    </>
  );
}
