import React from "react";
import "../components/styles/Account.css";
export default function Account() {
  return (
    <div className="account">
      <span className="material-icons-outlined" title="Account">
        account_circle
      </span>
      <a href="signup.html">Signup</a>
    </div>
  );
}
