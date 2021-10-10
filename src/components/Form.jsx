import React from "react";
import "./styles/Form.css";

export default function Form({ children, className, ...rest }) {
  return (
    <form className={`${className} form`} {...rest}>
      {children}
    </form>
  );
}
