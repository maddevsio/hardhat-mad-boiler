/**
 * Write common shared utility function in this module.
 * Such functionality may be reused for scripts and tests.
 */
import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";
import { ethers } from "hardhat";

export async function deployProduction(
    token: string,
    owner: SignerWithAddress
) {
    const vaultFactory = await ethers.getContractFactory("Vault", owner);

    return vaultFactory.deploy(token);
}

export async function deployTesting(owner: SignerWithAddress) {
    const erc20Factory = await ethers.getContractFactory("MockERC20", owner);

    const erc20 = await erc20Factory.deploy("Mock ERC20 Token", "MOCK", 18);

    const vaultFactory = await ethers.getContractFactory("Vault", owner);

    const vault = await vaultFactory.deploy(erc20.address);

    return { erc20, vault };
}
