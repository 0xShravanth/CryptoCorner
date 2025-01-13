import { configureStore, createSlice } from "@reduxjs/toolkit";

const initialState = {
  importWallet: false,
  createWallet: false,
  password: localStorage.getItem("password"),
  error: "",
};

const walletSlice = createSlice({
  name: "wallet",
  initialState,
  reducers: {
    setImportWallet: (state, action) => {
      state.importWallet = action.payload;
    },
    setCreateWallet: (state, action) => {
      state.createWallet = action.payload;
    },
    setPassword: (state, action) => {
      state.password = action.payload;
    },
    clearPassword: (state) => {
      state.clearPassword = null;
      localStorage.removeItem("password");
    },
    setError(state, action) {
      state.error = action.payload;
    },
  },
});

export const {
  setImportWallet,
  setCreateWallet,
  setPassword,
  clearPassword,
  setError,
} = walletSlice.actions;

const store = configureStore({
  reducer: walletSlice.reducer,
});

export default store;
