/* eslint-disable no-unused-vars */
import React from "react";
import Button from "../components/Button";

const Login = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen space-y-4">
      <h1 className="text-4xl font-bold text-center  bg-transparent text-ellipsis text-shadow">
        Welcome to CryptoCorner{" "}
      </h1>
      <Button className="bg-blue-500 text-white shadow-md">
        create wallet
      </Button>
      <Button className="bg-green-500 text-white shadow-md">
        import wallet
      </Button>
    </div>
  );
};

export default Login;
