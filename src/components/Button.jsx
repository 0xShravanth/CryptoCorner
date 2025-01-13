/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";

const Button = ({ children, onClick, className }) => {
  return (
    <button onClick={onClick} className={`px-4 py-2 rounded-md  ${className}`}>
      {children}
    </button>
  );
};

export default Button;
