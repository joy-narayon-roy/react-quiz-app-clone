import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { usrAuth } from "../contexts/AuthContext";
import Button from "./Button";
import Form from "./Form";
import Textinput from "./Textinput";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPasseord] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();

  const { login } = usrAuth();
  const history = useHistory();

  async function submitHandeler(e) {
    e.preventDefault();
    setLoading(true);

    try {
      setLoading(true);
      await login(email, password);
      history.push("/");
    } catch (err) {
      console.log(err);
      setLoading(false);
      setError("Faild to login!");
    }
  }

  return (
    <Form style={{ height: "330px" }} onSubmit={submitHandeler}>
      <Textinput
        type="email"
        placeholder="Enter your E-mail"
        icon="alternate_email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <Textinput
        type="password"
        placeholder="Enter your pasword"
        icon="lock"
        required
        value={password}
        onChange={(e) => setPasseord(e.target.value)}
      />
      <Button type="submit" text="Login" disabled={loading} />
      {error && <p className="error">{error}</p>}
      <div className="info">
        Don't have an account? <Link to="/signup">Creat account</Link> instead.
      </div>
    </Form>
  );
}
