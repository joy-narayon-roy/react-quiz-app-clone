import React from "react";
import signup_img from "../../accet/signup.svg";
import Button from "../Button";
import Checkbox from "../Checkbox";
import Form from "../Form";
import Illustration from "../Illustration";
import "../styles/Signup.css";
import Textinput from "../Textinput";

export default function Signup() {
  return (
    <>
      <h1>Creat an account</h1>
      <div className="column">
        <Illustration img={signup_img} />
        <Form className={`signup`}>
          <Textinput type="text" placeholder="Enter Your Name" icon="person" />
          <Textinput
            type="email"
            placeholder="Enter Your E-mail"
            icon="alternate_email"
          />
          <Textinput type="password" placeholder="Enter Password" icon="lock" />
          <Textinput
            type="password"
            placeholder="Confirm your password"
            icon="lock_clock"
          />
          <Checkbox text="I agree to the Terms &amp; Conditions" />
          <Button text="Submit" />
          <div className="info">
            Already have an account? <a href="login.html">Login</a> instead.
          </div>
        </Form>
      </div>
    </>
  );
}
