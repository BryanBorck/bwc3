require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config(
  {path: "./.env"}
);

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.18",
  networks: {
    localhost: {
      url: "http://localhost:8545"
    },
    mumbai: {
      url: `https://polygon-mumbai.infura.io/v3/${process.env.INFURA_PROJECT_ID}`,
      accounts: {
        mnemonic: process.env.MNEMONIC, 
        path: "m/44'/60'/0'/0"
      },
      chainId: 80001
    },
    alfajores: {
      url: "https://alfajores-forno.celo-testnet.org",
      accounts: {
        mnemonic: process.env.MNEMONIC,
        path: "m/44'/52752'/0'/0"
      },
      chainId: 44787
    }
  },
  
};
