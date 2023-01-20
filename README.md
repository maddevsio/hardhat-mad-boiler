# hardhat-mad-boiler

[![Developed by Mad Devs](https://maddevs.io/badge-dark.svg)](https://maddevs.io?utm_source=github&utm_medium=madboiler)
[![NodeJS CI](https://github.com/blitz-1306/hardhat-mad-boiler/actions/workflows/ci.yaml/badge.svg)](https://github.com/blitz-1306/hardhat-mad-boiler/actions/workflows/ci.yaml)
[![Code Style: Prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://github.com/prettier/prettier)
[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](LICENSE.md)

This boilerplate contains preconfigured HardHat Ethereum development environment with additional tools, providing an easy start for a new smart contract project.

## Features

-   TypeScript ready - get advantages of type inference system to avoid bugs. Make better quality scripts ans tests.
-   Preconfigured linter and formatter for TypeScript and Solidity - reduce efforts to keep your codebase clean (via an automation) and focus on development product features instead.
-   Support for `.env` files - manage credentials and access them for scripts and tests easily.
-   GitHub Actions workflow - apply [continuous integration](https://en.wikipedia.org/wiki/Continuous_integration) practice without additional efforts.

## Usage

## Plugins and notable dependencies

This project template relies on following notable dependencies:

-   [@openzeppelin/contracts](https://www.npmjs.com/package/@openzeppelin/contracts)
    -   Widely used primitives and components to develop smart-contracts. In case if you prefer to use upgradability, consider to use [@openzeppelin/contracts-upgradeable](https://www.npmjs.com/package/@openzeppelin/contracts-upgradeable).
-   [dotenv](https://www.npmjs.com/package/dotenv)
    -   Support for `.env` files in tests and scripts.
-   [ethers](https://www.npmjs.com/package/ethers)
    -   Wallet implementation and utilities in JavaScript and TypeScript.
-   [solidity-coverage](https://www.npmjs.com/package/solidity-coverage)
    -   Code coverage for Solidity testing.
-   [hardhat-abi-exporter](https://www.npmjs.com/package/hardhat-abi-exporter)
    -   Simplified smart-contract ABI export on compilation via Hardhat.
-   [hardhat-contract-sizer](https://www.npmjs.com/package/hardhat-contract-sizer)
    -   Bytecode size estimaton for compiled smart-contracts.
-   [hardhat-gas-reporter](https://www.npmjs.com/package/hardhat-gas-reporter)
    -   Estimate gas usage for executed unit tests.
-   [typescript](https://www.npmjs.com/package/typescript)
    -   Support for TypeScript.
-   [prettier](https://www.npmjs.com/package/prettier) and [prettier-plugin-solidity](https://www.npmjs.com/package/prettier-plugin-solidity)
    -   Automated code formatting for JavaScript, TypeScript and Solidity.
-   [@typescript-eslint/parser](https://www.npmjs.com/package/@typescript-eslint/parser) and [@typescript-eslint/eslint-plugin](https://www.npmjs.com/package/@typescript-eslint/eslint-plugin)
    -   [ESLint](https://www.npmjs.com/package/eslint) linter support for TypeScript.
-   [@nomiclabs/hardhat-solhint](https://www.npmjs.com/package/@nomiclabs/hardhat-solhint)
    -   [SolHint](https://www.npmjs.com/package/solhint) linter support for Solidity.
-   [@nomiclabs/hardhat-etherscan](https://www.npmjs.com/package/@nomiclabs/hardhat-etherscan)
    -   EtherScan smart-contract verification service support for HardHat.

We highly recommend using [Visual Studio Code](https://code.visualstudio.com/) IDE alongside with following extensions to improve development experience:

-   [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
-   [Prettier - Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
-   [Solidity + Hardhat](https://marketplace.visualstudio.com/items?itemName=NomicFoundation.hardhat-solidity) or [solidity](https://marketplace.visualstudio.com/items?itemName=JuanBlanco.solidity)
-   [Version Lens](https://marketplace.visualstudio.com/items?itemName=pflannery.vscode-versionlens)
