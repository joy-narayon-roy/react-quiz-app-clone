import React from "react";
import Layout from "./Layout";
// import Login from "./pages/Login";
// import Signup from "./pages/Signup";
import Quiz from "./pages/Quiz";
import "./styles/App.css";

export default function App() {
  return (
    <>
      <Layout>
        {/* <Login /> */}
        {/* <Signup /> */}
        <Quiz />
      </Layout>
    </>
  );
}
