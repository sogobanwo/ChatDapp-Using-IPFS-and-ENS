// SPDX-License-Identifier: MIT
pragma solidity ^0.8.23;

interface IENS {
    function setName(string calldata _name) external;

    function getAddressFromName(
        string calldata _name
    ) external view returns (address);

    function getNameFromAddress(
        address _address
    ) external view returns (string memory);

    function getSentMessages(
        string calldata _receiver
    ) external view returns (string[] memory);
}
