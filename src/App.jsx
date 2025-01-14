/* eslint-disable no-unused-vars */
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import PasswordManager from "./components/PasswordManager";
import Home from "./pages/Home";
import { Provider } from "react-redux";
import store from "./redux/store";
import Mnemonics from "./components/Mnemonics";

export default function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/t" element={<Mnemonics />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}
