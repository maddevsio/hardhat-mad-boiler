import "@nomicfoundation/hardhat-chai-matchers";
import "@nomicfoundation/hardhat-toolbox";
import "@nomiclabs/hardhat-ethers";
import "@nomiclabs/hardhat-etherscan";
import "@nomiclabs/hardhat-solhint";
import "@openzeppelin/hardhat-defender";
import "@openzeppelin/hardhat-upgrades";
import * as dotenv from "dotenv";
import "hardhat-abi-exporter";
import "hardhat-contract-sizer";
import "hardhat-gas-reporter";
import { HardhatUserConfig } from "hardhat/config";
import "solidity-coverage";

dotenv.config();

const config: HardhatUserConfig = {
    gasReporter: {
        enabled: Boolean(process.env.REPORT_GAS),
    },
    contractSizer: {
        alphaSort: true,
        disambiguatePaths: false,
        runOnCompile: false,
        strict: true,
    },
    abiExporter: {
        path: "./abi",
        runOnCompile: true,
        clear: true,
        spacing: 2,
        only: [
            /**
             * List of specific contract names for exporting ABI
             */
            // ":ERC20",
        ],
        format: "json",
    },
    networks: {
        ethereum: {
            url: process.env.ETHEREUM_URL || "",
            chainId: 1,
        },
    },
    etherscan: {
        apiKey: {
            mainnet: process.env.API_KEY_ETHERSCAN || "",
        },
    },
    solidity: {
        compilers: [
            {
                version: "0.8.17",
                settings: {
                    optimizer: {
                        enabled: true,
                        runs: 1000,
                    },
                },
            },
        ],
    },
};

export default config;
