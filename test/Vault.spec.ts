import { expect } from "chai";
import { Signer } from "ethers";
import { ethers } from "hardhat";
import { deployTesting } from "../scripts/util";
import { MockERC20, Vault } from "../typechain-types";

describe("Vault", () => {
    let owner: Signer;
    let userA: Signer;
    let userB: Signer;

    let protocol: { vault: Vault; erc20: MockERC20 };

    beforeEach(async () => {
        [owner, userA, userB] = await ethers.getSigners();

        protocol = await deployTesting(owner);

        await protocol.erc20.connect(userA).mint(1000);

        await protocol.erc20
            .connect(userA)
            .approve(protocol.vault, await protocol.erc20.balanceOf(userA));

        await protocol.erc20.connect(userB).mint(100);

        await protocol.erc20
            .connect(userB)
            .approve(protocol.vault, await protocol.erc20.balanceOf(userB));
    });

    it("deposit()", async () => {
        const userBalanceA = await protocol.erc20.balanceOf(userA);
        const userBalanceB = await protocol.erc20.balanceOf(userB);

        await protocol.vault.connect(userA).deposit(userBalanceA);
        await protocol.vault.connect(userB).deposit(userBalanceB);

        expect(await protocol.erc20.balanceOf(userA)).eq(0);
        expect(await protocol.erc20.balanceOf(userB)).eq(0);
        expect(await protocol.erc20.balanceOf(protocol.vault)).eq(
            userBalanceA + userBalanceB
        );

        expect(await protocol.vault.balanceOf(userA)).eq(userBalanceA);
        expect(await protocol.vault.balanceOf(userB)).eq(userBalanceB);

        expect(await protocol.vault.totalSupply()).eq(
            userBalanceA + userBalanceB
        );
    });

    it("withdraw()", async () => {
        const userBalanceA = await protocol.erc20.balanceOf(userA);
        const userBalanceB = await protocol.erc20.balanceOf(userB);

        /**
         * Users A and B deposit funds
         */
        await protocol.vault.connect(userA).deposit(userBalanceA);
        await protocol.vault.connect(userB).deposit(userBalanceB);

        expect(await protocol.vault.totalSupply()).eq(
            userBalanceA + userBalanceB
        );

        /**
         * User A withdraws funds
         */
        await protocol.vault.connect(userA).withdraw(userBalanceA);

        expect(await protocol.erc20.balanceOf(userA)).eq(userBalanceA);
        expect(await protocol.erc20.balanceOf(protocol.vault)).eq(userBalanceB);

        expect(await protocol.vault.balanceOf(userA)).eq(0);

        expect(await protocol.vault.totalSupply()).eq(userBalanceB);

        /**
         * User B withdraws funds
         */
        await protocol.vault.connect(userB).withdraw(userBalanceB);

        expect(await protocol.erc20.balanceOf(userB)).eq(userBalanceB);
        expect(await protocol.erc20.balanceOf(protocol.vault)).eq(0);

        expect(await protocol.vault.balanceOf(userB)).eq(0);

        expect(await protocol.vault.totalSupply()).eq(0);
    });
});
