// SPDX-License-Identifier: MIT
pragma solidity ^0.8.23;

contract ENS {
    error NAME_ALREADY_EXISTED();
    error NAME_NOT_YET_REGISTERED();
    error ADDRESS_NOT_YET_REGISTERED();

    struct ENSProfile {
        address userAddress;
        string name;
        string imageUri;
    }

    ENSProfile[] allProfiles;

    mapping(address => ENSProfile) private addressToProfile;
    mapping(string => ENSProfile) private nameToProfile;

    function setName(string calldata _name, string calldata _imageUri) external  {
        if (nameToProfile[_name].userAddress != address(0)) revert NAME_ALREADY_EXISTED();

        // setting values of the addressToProfile
        ENSProfile memory profile = addressToProfile[msg.sender];
        profile.name = _name;
        profile.imageUri = _imageUri;
        profile.userAddress = msg.sender;
        addressToProfile[msg.sender] = profile;


        // setting values of the nameToProfile
        nameToProfile[_name].userAddress = msg.sender;
        nameToProfile[_name].imageUri = _imageUri;
        nameToProfile[_name].name = _name;

        allProfiles.push(profile);
    }

    function getProfileFromName(
        string calldata _name
    ) external view returns (ENSProfile memory) {
        return nameToProfile[_name];
    }

    function getProfileFromAddress(
        address _address
    ) external view returns (ENSProfile memory) {
        return addressToProfile[_address];
    }

    function getAllProfiles() external  view returns (ENSProfile[] memory) {
        return allProfiles;
    }
}
