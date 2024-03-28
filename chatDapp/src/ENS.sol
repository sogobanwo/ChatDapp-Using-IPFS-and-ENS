// SPDX-License-Identifier: MIT
pragma solidity ^0.8.23;

contract ENS {
    mapping(address => string) public addressToName;
    mapping(string => address) public nameToAddress;

    function setName(string calldata _name) public {
        require(nameToAddress[_name] == address(0), "Name already exists");
        addressToName[msg.sender] = _name;
        nameToAddress[_name] = msg.sender;
    }

    function getAddressFromName(
        string calldata _name
    ) public view returns (address) {
        return nameToAddress[_name];
    }

    function getNameFromAddress(
        address _address
    ) public view returns (string memory) {
        return addressToName[_address];
    }
}
