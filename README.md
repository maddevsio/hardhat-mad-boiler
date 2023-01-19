# hardhat-mad-boiler

[![Developed by Mad Devs](https://maddevs.io/badge-dark.svg)](https://maddevs.io?utm_source=github&utm_medium=madboiler)
[![NodeJS CI](https://github.com/blitz-1306/hardhat-mad-boiler/actions/workflows/ci.yaml/badge.svg)](https://github.com/blitz-1306/hardhat-mad-boiler/actions/workflows/ci.yaml)
[![Code Style: Prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://github.com/prettier/prettier)
[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](LICENSE.md)

This boilerplate contains preconfigured HardHat Ethereum development environment with additional tools, providing an easy start for a new smart contract project.

## Features

-   TypeScript ready - get advantages of type inference system to avoid bugs. Make better quality scripts ans tests.
-   Preconfigured linter and formatter for TypeScript and Solidity - concentrate on product features instead of bothering to keep your codebase clean (automation will handle that for you).
-   Support for `.env` files - manage credentials and access them for scripts and tests easily.
-   GitHub Actions workflow - apply [continuous integration](https://en.wikipedia.org/wiki/Continuous_integration) practice without additional efforts.

## Usage

## Plugins and notable dependencies

This project template relies on following plugins and dependencies:

-   [@openzeppelin/contracts](https://www.npmjs.com/package/@openzeppelin/contracts)
-   [dotenv](https://www.npmjs.com/package/dotenv)
-   [ethers](https://www.npmjs.com/package/ethers)
-   [prettier](https://www.npmjs.com/package/prettier) and [prettier-plugin-solidity](https://www.npmjs.com/package/prettier-plugin-solidity)
-   [solidity-coverage](https://www.npmjs.com/package/solidity-coverage)
-   [hardhat-abi-exporter](https://www.npmjs.com/package/hardhat-abi-exporter)
-   [hardhat-contract-sizer](https://www.npmjs.com/package/hardhat-contract-sizer)
-   [hardhat-gas-reporter](https://www.npmjs.com/package/hardhat-gas-reporter)
