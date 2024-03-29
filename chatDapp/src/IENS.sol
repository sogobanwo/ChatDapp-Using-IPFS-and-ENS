// SPDX-License-Identifier: MIT
pragma solidity ^0.8.23;

interface IENS {
    struct ENSProfile {
        address userAddress;
        string name;
        string imageUri;
    }
    
    function setName(string calldata _name, string calldata _imageUri) external ;

     function getProfileFromName(
        string calldata _name
    ) external view returns (ENSProfile memory);

    function getProfileFromAddress(
        address _address
    ) external view returns (ENSProfile memory);
}
