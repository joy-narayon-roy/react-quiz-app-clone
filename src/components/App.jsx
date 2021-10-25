import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { AuthProvider } from "../contexts/AuthContext";
import Layout from "./Layout";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Quiz from "./pages/Quiz";
import Result from "./pages/Result";
import Signup from "./pages/Signup";
import PtivateRoute from "./PrivetRoute";
import PublicRoute from "./PublicRoute";
import "./styles/App.css";

export default function App() {
  return (
    <>
      <Router>
        <AuthProvider>
          <Layout>
            <Switch>
              <Route exact path="/" component={Home} />
              <PublicRoute exact path="/signup" component={Signup} />
              <PublicRoute exact path="/login" component={Login} />
              <PtivateRoute exact path="/quiz" component={Quiz} />
              <PtivateRoute exact path="/result" component={Result} />
            </Switch>
          </Layout>
        </AuthProvider>
      </Router>
    </>
  );
}
