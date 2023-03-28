require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();
require("@nomiclabs/hardhat-etherscan")
require("./tasks/block_number")
require("hardhat-gas-reporter")
require("solidity-coverage")

/** @type import('hardhat/config').HardhatUserConfig */
const sepolia_rpc_url = process.env.sepolia_rpc_url
const sepolia_rpc_account = process.env.sepolia_rpc_account
const etherscan_api_key = process.env.etherscan_api_key
const coinmarket_api = process.env.coinmarket_api
module.exports = {
  defaultNetwork: "hardhat",
  networks: {
    sepolia: {
      url: sepolia_rpc_url,
      accounts: [sepolia_rpc_account],
      chainId: 11155111
    },
    localhost: {
      url: "http://127.0.0.1.8545/",
      chainId: 31337
    }
  },
  solidity: "0.8.18",
  etherscan: {
    apiKey: etherscan_api_key
  },
  gasReporter: {
    // enabled: true,
    outputFile: "gas-report.txt",
    noColors: true,
    currency: "USD",
    coinmarketcap: coinmarket_api,
    token: "MATIC"
  }
};
