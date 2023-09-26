/**
 * Write common shared utility function in this module.
 * Such functionality may be reused for scripts and tests.
 */
import { Signer } from "ethers";
import { ethers } from "hardhat";

export async function deployProduction(token: string, owner: Signer) {
    const vaultFactory = await ethers.getContractFactory("Vault", owner);

    return vaultFactory.deploy(token);
}

export async function deployTesting(owner: Signer) {
    const erc20Factory = await ethers.getContractFactory("MockERC20", owner);

    const erc20 = await erc20Factory.deploy("Mock ERC20 Token", "MOCK", 18);

    const vaultFactory = await ethers.getContractFactory("Vault", owner);

    const vault = await vaultFactory.deploy(erc20);

    return { erc20, vault };
}
