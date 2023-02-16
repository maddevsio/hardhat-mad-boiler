import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";
import { expect } from "chai";
import { ethers } from "hardhat";
import { deployTesting } from "../scripts/util";
import { MockERC20, Vault } from "../typechain-types";

describe("Vault", () => {
    let owner: SignerWithAddress;
    let userA: SignerWithAddress;
    let userB: SignerWithAddress;

    let protocol: { vault: Vault; erc20: MockERC20 };

    beforeEach(async () => {
        [owner, userA, userB] = await ethers.getSigners();

        protocol = await deployTesting(owner);

        await protocol.erc20.connect(userA).mint(1000);

        await protocol.erc20
            .connect(userA)
            .approve(
                protocol.vault.address,
                protocol.erc20.balanceOf(userA.address)
            );

        await protocol.erc20.connect(userB).mint(100);

        await protocol.erc20
            .connect(userB)
            .approve(
                protocol.vault.address,
                protocol.erc20.balanceOf(userB.address)
            );
    });

    it("deposit()", async () => {
        const userBalanceA = await protocol.erc20.balanceOf(userA.address);
        const userBalanceB = await protocol.erc20.balanceOf(userB.address);

        await protocol.vault.connect(userA).deposit(userBalanceA);
        await protocol.vault.connect(userB).deposit(userBalanceB);

        expect(await protocol.erc20.balanceOf(userA.address)).eq(0);
        expect(await protocol.erc20.balanceOf(userB.address)).eq(0);
        expect(await protocol.erc20.balanceOf(protocol.vault.address)).eq(
            userBalanceA.add(userBalanceB)
        );

        expect(await protocol.vault.balanceOf(userA.address)).eq(userBalanceA);
        expect(await protocol.vault.balanceOf(userB.address)).eq(userBalanceB);

        expect(await protocol.vault.totalSupply()).eq(
            userBalanceA.add(userBalanceB)
        );
    });

    it("withdraw()", async () => {
        const userBalanceA = await protocol.erc20.balanceOf(userA.address);
        const userBalanceB = await protocol.erc20.balanceOf(userB.address);

        /**
         * Users A and B deposit funds
         */
        await protocol.vault.connect(userA).deposit(userBalanceA);
        await protocol.vault.connect(userB).deposit(userBalanceB);

        expect(await protocol.vault.totalSupply()).eq(
            userBalanceA.add(userBalanceB)
        );

        /**
         * User A withdraws funds
         */
        await protocol.vault.connect(userA).withdraw(userBalanceA);

        expect(await protocol.erc20.balanceOf(userA.address)).eq(userBalanceA);
        expect(await protocol.erc20.balanceOf(protocol.vault.address)).eq(
            userBalanceB
        );

        expect(await protocol.vault.balanceOf(userA.address)).eq(0);

        expect(await protocol.vault.totalSupply()).eq(userBalanceB);

        /**
         * User B withdraws funds
         */
        await protocol.vault.connect(userB).withdraw(userBalanceB);

        expect(await protocol.erc20.balanceOf(userB.address)).eq(userBalanceB);
        expect(await protocol.erc20.balanceOf(protocol.vault.address)).eq(0);

        expect(await protocol.vault.balanceOf(userB.address)).eq(0);

        expect(await protocol.vault.totalSupply()).eq(0);
    });
});
