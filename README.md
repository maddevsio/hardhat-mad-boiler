# hardhat-mad-boiler

[![Developed by Mad Devs](https://maddevs.io/badge-dark.svg)](https://maddevs.io?utm_source=github&utm_medium=madboiler)
[![NodeJS CI](https://github.com/maddevsio/hardhat-mad-boiler/actions/workflows/ci.yaml/badge.svg)](https://github.com/maddevsio/hardhat-mad-boiler/actions/workflows/ci.yaml)
[![Code Style: Prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://github.com/prettier/prettier)
[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](LICENSE)

This boilerplate contains preconfigured HardHat Ethereum development environment with additional tools, providing an easy start for a new smart contract project.

## Benefits

-   Use preconfigured linter and formatter for TypeScript and Solidity would reduce efforts to keep codebase clean (via an automation) and let you focus on development of product features instead.
-   Get advantages of TypeScript type inference system to avoid bugs in scripts and tests, therefore improving their quality.
-   Get support for `.env` files to manage credentials and access them from scripts and tests easily.
-   Use GitHub Actions workflow to apply [continuous integration](https://en.wikipedia.org/wiki/Continuous_integration) practice without additional efforts.
-   Get enhanced development experience by using suggested IDE extensions. Template contains initial configuration.

## Usage

1. Preinstall NodeJS of [compatible version](/.nvmrc). If there is a need to run different NodeJS versions, consider using [NVM](https://github.com/nvm-sh/nvm) or similar tool for your platform.
    ```bash
    nvm install
    nvm use
    node --version
    npm --version
    ```
2. Create new repository, [using this template](https://docs.github.com/en/repositories/creating-and-managing-repositories/creating-a-repository-from-a-template).
3. Clone newly created repository and switch to its directory.
4. Install dependencies:
    ```bash
    npm install
    ```
5. Install [Visual Studio Code](https://code.visualstudio.com/) IDE and [extensions](#ide-extensions).
6. Tune settings according to your personal preference and start your development.

## Dependencies and IDE extensions

### Dependencies

This project template relies on following notable dependencies:

-   [@openzeppelin/contracts](https://www.npmjs.com/package/@openzeppelin/contracts)
    -   Widely used primitives and components to develop smart-contracts. In case if you prefer to use upgradability, consider to use [@openzeppelin/contracts-upgradeable](https://www.npmjs.com/package/@openzeppelin/contracts-upgradeable) instead.
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

### IDE extensions

We recommend using [Visual Studio Code](https://code.visualstudio.com/) IDE alongside with following extensions to enhance development experience:

-   [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
-   [Prettier - Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
-   [Solidity + Hardhat](https://marketplace.visualstudio.com/items?itemName=NomicFoundation.hardhat-solidity) or [solidity](https://marketplace.visualstudio.com/items?itemName=JuanBlanco.solidity)
-   [Version Lens](https://marketplace.visualstudio.com/items?itemName=pflannery.vscode-versionlens)

## Further reading

-   [HardHat documentation](https://hardhat.org/docs)
-   [OpenZeppelin documentation](https://docs.openzeppelin.com/)
-   [Solidity documentation](https://docs.soliditylang.org/)
-   [TypeScript documentation](https://www.typescriptlang.org/docs/)
