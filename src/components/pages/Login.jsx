import React from "react";
import login_img from "../../accet/login.svg";
import Button from "../Button";
import Form from "../Form";
import Illustration from "../Illustration.jsx";
import "../styles/Illustration.css";
import "../styles/Login.css";
import Textinput from "../Textinput";

export default function Login() {
  return (
    <div>
      <h1>Login to your account</h1>
      <div className="column">
        <Illustration img={login_img} />
        <Form className={`login`}>
          <Textinput
            type="email"
            placeholder="Enter your E-mail"
            icon="alternate_email"
          />
          <Textinput
            type="password"
            placeholder="Enter your pasword"
            icon="lock"
          />
          <Button text="Login" />
          <div className="info">
            Don't have an account? <a href="signup.html">Signup</a> instead.
          </div>
        </Form>
      </div>
    </div>
  );
}
