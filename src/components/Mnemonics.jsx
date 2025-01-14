import { useDispatch, useSelector } from "react-redux";
import { generateMnemonic } from "bip39";
import { setMnemonic } from "../redux/store";
import Button from "./Button";
import SolanaWallet from "./SolanaWallet";
import EthWallet from "./EthWallet";

const Mnemonics = () => {
  const dispatch = useDispatch();
  const { mnemonic, mnemonicWords } = useSelector((state) => state.mnemonic);

  const generateMnemonicPhrase = async () => {
    const mn = await generateMnemonic();
    dispatch(setMnemonic(mn));
  };
  return (
    <div>
      <Button
        onClick={generateMnemonicPhrase}
        className="bg-blue-500 text-white hover:bg-blue-700"
      >
        create Seed Phrase
      </Button>
      <div>
        {mnemonicWords.map((word, indx) => (
          <div key={indx} className="border px-4 py-2 rounded text-center">
            {word}
          </div>
        ))}
      </div>
      {mnemonic && <SolanaWallet mnemonic={mnemonic} />}
      {mnemonic && <EthWallet mnemonic={mnemonic} />}
    </div>
  );
};

export default Mnemonics;
