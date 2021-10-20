import React from "react";
import signup_img from "../../accet/signup.svg";
import Illustration from "../Illustration";
import SignupForm from "../SignupForm";

export default function Signup() {
  return (
    <>
      <h1>Creat an account</h1>
      <div className="column">
        <Illustration img={signup_img} />
        <SignupForm></SignupForm>
      </div>
    </>
  );
}
