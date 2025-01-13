/* eslint-disable no-unused-vars */
import { React, useState } from "react";
import Button from "../components/Button";
import PasswordManager from "../components/PasswordManager";
import Home from "./Home";

const Login = () => {
  const [importWallet, setImportWallet] = useState(false);
  const [createWallet, setCreateWallet] = useState(false);
  const [managepage, setManagepage] = useState(
    localStorage.getItem("password")
  );

  const handleImportWallet = () => {
    setImportWallet(true);
  };

  const handleCreateWallet = () => {
    setCreateWallet(true);
  };

  return (
    <>
      {!importWallet && !createWallet && !managepage ? (
        <div className="flex flex-col items-center justify-center h-screen space-y-4">
          <h1 className="text-4xl font-bold text-center  bg-transparent text-ellipsis text-shadow">
            Welcome to CryptoCorner{" "}
          </h1>
          <Button
            onClick={handleCreateWallet}
            className="bg-blue-500 text-white shadow-md"
          >
            create wallet
          </Button>
          <Button
            onClick={handleImportWallet}
            className="bg-green-500 text-white shadow-md"
          >
            import wallet
          </Button>
        </div>
      ) : (
        <PasswordManager
          importWallet={importWallet}
          createWallet={createWallet}
        />
      )}
    </>
  );
};

export default Login;
