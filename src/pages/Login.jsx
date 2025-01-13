/* eslint-disable no-unused-vars */
import { React } from "react";
import Button from "../components/Button";
import PasswordManager from "../components/PasswordManager";
import { useDispatch, useSelector } from "react-redux";
import { setImportWallet, setCreateWallet } from "../redux/store";

const Login = () => {
  const dispatch = useDispatch();
  const { importWallet, createWallet, password } = useSelector(
    (state) => state.wallet
  );

  const handleImportWallet = () => {
    dispatch(setImportWallet(true));
  };

  const handleCreateWallet = () => {
    dispatch(setCreateWallet(true));
  };

  return (
    <>
      {!importWallet && !createWallet && !password ? (
        <div className="flex flex-col items-center justify-center h-screen space-y-4">
          <h1 className="text-4xl font-bold text-center  bg-transparent text-ellipsis text-shadow">
            Welcome to CryptoCorner
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
