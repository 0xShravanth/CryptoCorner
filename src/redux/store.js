import { configureStore, createSlice } from "@reduxjs/toolkit";

//for the initial state of the store for mnemonics
const initialMnemonicState = {
  mnemonic: "",
  mnemonicWords: [],
};

const mnemonicSlice = createSlice({
  name: "mnemonic",
  initialState: initialMnemonicState,
  reducers: {
    setMnemonic(state, action) {
      state.mnemonic = action.payload;
      state.mnemonicWords = action.payload.split(" "); //splitting the mnemonics into words
      localStorage.setItem("mnemonic", action.payload);
    },
    clearMnemonic(state) {
      state.mnemonic = "";
      state.mnemonicWords = [];
      localStorage.removeItem("mnemonic");
    },
  },
});

// for the initial state of the store for walletpassword management
const initialWalletState = {
  importWallet: false,
  createWallet: false,
  password: localStorage.getItem("password"),
  error: "",
};

const walletSlice = createSlice({
  name: "wallet",
  initialState: initialWalletState,
  reducers: {
    setImportWallet(state, action) {
      state.importWallet = action.payload;
    },
    setCreateWallet(state, action) {
      state.createWallet = action.payload;
    },
    setPassword(state, action) {
      state.password = action.payload;
      localStorage.setItem("password", action.payload);
    },
    clearPassword(state) {
      state.password = null;
      localStorage.removeItem("password");
    },
    setError(state, action) {
      state.error = action.payload;
    },
  },
});

export const { setMnemonic, clearMnemonic } = mnemonicSlice.actions;

export const {
  setImportWallet,
  setCreateWallet,
  setPassword,
  clearPassword,
  setError,
} = walletSlice.actions;

const store = configureStore({
  reducer: {
    mnemonic: mnemonicSlice.reducer,
    wallet: walletSlice.reducer,
  },
});

export default store;
