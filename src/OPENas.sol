// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import {OPEN, ERC20, IERC20MintBurnable} from "../lib/open-token/src/OPEN.sol";

/// @notice This is a free ERC20 token, made for demonstration purposes.
contract OPENas is OPEN {
    /// @inheritdoc ERC20
    function name() public pure override returns (string memory) {
        return "Openmesh Academy Showcase";
    }

    /// @inheritdoc ERC20
    function symbol() public pure override returns (string memory) {
        return "OPENas";
    }

    /// @notice Gives the sender 1 token.
    function freeToken() external {
        _mint(msg.sender, 1 ether);
    }
}
