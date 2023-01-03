import { Wallet } from "ethers";
import hre, { ethers } from "hardhat";
import { Snapshot } from "./types";

export async function currentTimestamp() {
    const block = await ethers.provider.getBlock(ethers.provider.getBlockNumber());

    return block.timestamp;
}

export function tap<T>(value: T) {
    console.log(value);

    return value;
}

export function getRandomAddress() {
    return Wallet.createRandom().address;
}

export async function makeSnapshot(snapshot: Snapshot | undefined): Promise<Snapshot> {
    const fresh = await hre.network.provider.send("evm_snapshot");
  
    if (snapshot) {
        snapshot.initial = fresh;

        return snapshot;
    }

    return fresh;
}
