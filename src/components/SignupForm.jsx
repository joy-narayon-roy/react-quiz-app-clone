import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { usrAuth } from "../contexts/AuthContext";
import Button from "./Button";
import Checkbox from "./Checkbox";
import Form from "./Form";
import Textinput from "./Textinput";

export default function SignupForm() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [agree, setAgree] = useState("");
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const { signup } = usrAuth();
  const history = useHistory();

  async function handelSubmit(e) {
    e.preventDefault();
    if (password !== confirmPassword) {
      return setError("Password don't match!");
    }

    try {
      setError("");
      setLoading(true);
      await signup(email, password, username);
      history.push("/");
    } catch (err) {
      console.log(err);
      setLoading(false);
      setError("Faild to creat account!");
    }
  }

  return (
    <>
      <Form style={{ height: "500px" }} onSubmit={handelSubmit}>
        <Textinput
          type="text"
          placeholder="Enter Your Name"
          icon="person"
          required
          value={username}
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        />
        <Textinput
          type="email"
          placeholder="Enter Your E-mail"
          icon="alternate_email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Textinput
          type="password"
          placeholder="Enter Password"
          icon="lock"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Textinput
          type="password"
          placeholder="Confirm your password"
          icon="lock_clock"
          required
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <Checkbox
          text="I agree to the Terms &amp; Conditions"
          value={agree}
          required
          onChange={(e) => {
            setAgree(e.target.value);
          }}
        />
        <Button disabled={loading} text="Submit" type="submit" />
        {error && <p className="error">{error}</p>}
        <div className="info">
          Already have an account? <Link to="/login">Login</Link> instead.
        </div>
      </Form>
    </>
  );
}
