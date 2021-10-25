import { Redirect, Route } from "react-router-dom";
import { usrAuth } from "../contexts/AuthContext";

export default function PtivateRoute({ component: Component, ...rest }) {
  const { currentUser } = usrAuth();

  return currentUser ? (
    <Route {...rest}>{(props) => <Component {...props} />}</Route>
  ) : (
    <Redirect to="/login" />
  );
}
