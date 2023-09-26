/// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.18;

import {IERC20} from "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import {SafeERC20} from "@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol";

contract Vault {
    using SafeERC20 for IERC20;

    IERC20 public token;

    uint256 public totalSupply;

    mapping(address => uint256) public balanceOf;

    constructor(address token_) {
        token = IERC20(token_);
    }

    function deposit(uint256 amount_) external {
        uint256 shares;

        if (totalSupply == 0) {
            shares = amount_;
        } else {
            shares = (amount_ * totalSupply) / token.balanceOf(address(this));
        }

        totalSupply += shares;

        balanceOf[msg.sender] += shares;

        token.safeTransferFrom(msg.sender, address(this), amount_);
    }

    function withdraw(uint256 shares_) external {
        uint256 amount = (shares_ * token.balanceOf(address(this))) /
            totalSupply;

        totalSupply -= shares_;

        balanceOf[msg.sender] -= shares_;

        token.safeTransfer(msg.sender, amount);
    }
}
