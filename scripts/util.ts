import {
    BigNumber,
    BigNumberish,
    ContractTransaction,
    utils,
    Wallet
} from "ethers";
import hre, { ethers } from "hardhat";
import { MineOptions, Snapshot } from "./types";

export async function currentTimestamp() {
    const block = await ethers.provider.getBlock(
        ethers.provider.getBlockNumber()
    );

    return block.timestamp;
}

export function tap<T>(value: T) {
    console.log(value);

    return value;
}

export function bn(value: BigNumberish) {
    return BigNumber.from(value);
}

export function toWei(value: string) {
    return utils.parseUnits(value, 18);
}

export function getRandomAddress() {
    return Wallet.createRandom().address;
}

export async function makeSnapshot(
    snapshot: Snapshot | undefined
): Promise<Snapshot> {
    const fresh = await hre.network.provider.send("evm_snapshot");

    if (snapshot) {
        snapshot.initial = fresh;

        return snapshot;
    }

    return fresh;
}

export async function backToSnapshot(snapshot: Snapshot): Promise<Snapshot> {
    await hre.network.provider.send("evm_revert", [snapshot.initial]);

    return makeSnapshot(snapshot);
}

export async function mine(options: MineOptions): Promise<void> {
    if (options.increaseTime !== undefined) {
        await ethers.provider.send("evm_increaseTime", [options.increaseTime]);
    }

    if (options.nextBlockTimestamp !== undefined) {
        await ethers.provider.send("evm_setNextBlockTimestamp", [
            options.nextBlockTimestamp
        ]);
    }

    return ethers.provider.send("evm_mine", []);
}

export async function txTimestamp(tx: ContractTransaction): Promise<BigNumber> {
    if (tx.blockNumber === undefined) {
        throw Error("Transacion block number is undefined");
    }

    const block = await ethers.provider.getBlock(tx.blockNumber);

    return bn(block.timestamp);
}
