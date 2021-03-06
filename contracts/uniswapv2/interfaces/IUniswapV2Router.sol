//SPDX-License-Identifier: MIT
pragma solidity ^0.7.0;

interface IUniswapV2Router {
    function factory() external pure returns (address);

    function swapExactETHForTokens(
        uint256 amountOutMin,
        address[] calldata path,
        address to,
        uint256 deadline
    ) external payable returns (uint256[] memory amounts);
}
