import { Redirect, Route } from "react-router-dom";
import { usrAuth } from "../contexts/AuthContext";

export default function PublicRoute({ component: Component, ...rest }) {
  const { currentUser } = usrAuth();

  return currentUser ? (
    <Redirect to="/" />
  ) : (
    <Route {...rest}>{(props) => <Component {...props} />}</Route>
  );
}
