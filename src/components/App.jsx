import React from "react";
import Layout from "./Layout";
import Signup from "./pages/Signup";
import "./styles/App.css";

export default function App() {
  return (
    <>
      <Layout>
        <Signup />
      </Layout>
    </>
  );
}
