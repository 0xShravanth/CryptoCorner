import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "./Button";

const PasswordManager = () => {
  const [password, setPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [storePassword, setStorePassword] = useState(
    localStorage.getItem("password")
  );
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleCreatePassword = () => {
    if (validatePassword(newPassword)) {
      localStorage.setItem("password", newPassword);
      setStorePassword(newPassword);
      setPassword("");
      setNewPassword("");
      setError("");
      alert("Password created succcessfully");
    } else {
      setError(
        "Password must be at least 8 characters long and contain a mix of letters, numbers, and special characters."
      );
    }
  };

  const handleValidatePassword = () => {
    if (password === storePassword) {
      navigate("/home");
    } else {
      setError("Incorrect password");
    }
  };

  const handleClearPassword = () => {
    localStorage.removeItem("password");
    setStorePassword(null);
    setPassword("");
    setNewPassword("");
    setError("");
    alert("password cleared");
  };

  const validatePassword = (password) => {
    const regex =
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
    return regex.test(password);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      {storePassword ? (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
          <h1 className="text-2xl font-bold mb-4 bg-transparent text-shadow">
            Enter Your Password
          </h1>
          <input
            type="password"
            placeholder="Enter Your Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="px-4 py-2 border rounded mb-4"
          />
          <Button
            onClick={handleValidatePassword}
            className="bg-blue-500 text-white hover:bg-blue-700"
          >
            login
          </Button>
          <Button
            onClick={handleClearPassword}
            className="mt-4 bg-red-500 text-white hover:bg-red-700"
          >
            clear password
          </Button>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
          <h1 className="text-2xl text-gray-800 font-bold mb-4 bg-transparent ">
            Create new Password
          </h1>
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="px-4 py-2 border rounded mb-4"
          />
          <input
            type="password"
            placeholder="verify your password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            className="px-4 py-2 border rounded mb-4"
          />
          <Button
            onClick={handleCreatePassword}
            className="bg-blue-500 text-white hover:bg-blue-700"
          >
            Submit
          </Button>
        </div>
      )}
      {error && <p className="text-red-500 mt-4">{error}</p>}
    </div>
  );
};

export default PasswordManager;
