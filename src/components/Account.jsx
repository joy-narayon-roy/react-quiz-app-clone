import React from "react";
import { Link } from "react-router-dom";
import "../components/styles/Account.css";
import { usrAuth } from "../contexts/AuthContext";

export default function Account() {
  const { currentUser, logout } = usrAuth();
  return (
    <div className="account">
      {currentUser ? (
        <>
          <span className="material-icons-outlined" title="Account">
            account_circle
          </span>
          <span>{currentUser.displayName}</span>
          <span
            className="material-icons-outlined"
            title="Logout"
            onClick={logout}
          >
            {" "}
            logout{" "}
          </span>
        </>
      ) : (
        <>
          <Link to="/signup">Signup</Link>
          <Link to="/login">Login</Link>
        </>
      )}
    </div>
  );
}
