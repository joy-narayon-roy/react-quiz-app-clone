import { Redirect, Route } from "react-router";
import { usrAuth } from "../contexts/AuthContext.js";

export function PrivetRoute({ component: Component, ...rest }) {
  const { currentUser } = usrAuth();

  return currentUser ? (
    <Route {...rest}>{(props) => <Component {...props} />}</Route>
  ) : (
    <Redirect to="/login" />
  );
}

export function PublicRoute({ component: Component, ...rest }) {
  const { currentUser } = usrAuth();

  return currentUser ? (
    <Redirect to="/" />
  ) : (
    <Route {...rest}>{(props) => <Component {...props} />}</Route>
  );
}
