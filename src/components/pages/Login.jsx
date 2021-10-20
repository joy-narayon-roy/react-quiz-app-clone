import React from "react";
import login_img from "../../accet/login.svg";
import Illustration from "../Illustration.jsx";
import LoginForm from "../LoginForm";
import "../styles/Illustration.css";

export default function Login() {
  return (
    <div>
      <h1>Login to your account</h1>
      <div className="column">
        <Illustration img={login_img} />
        <LoginForm />
      </div>
    </div>
  );
}
