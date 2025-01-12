/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";

const Button = ({ children, OnClick, className }) => {
  return (
    <button onClick={OnClick} className={`px-4 py-2 rounded-md  ${className}`}>
      {children}
    </button>
  );
};

export default Button;
