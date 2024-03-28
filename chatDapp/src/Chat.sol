// SPDX-License-Identifier: MIT
pragma solidity ^0.8.23;

import "./IENS.sol";

contract Chat {
    IENS public ens;
    uint256 chatId;

    constructor(address ENS) {
        ens = IENS(ENS);
    }

    event ChatStarted(address indexed sender, address indexed receiver);

    event MessageSent(
        address indexed sender,
        address indexed receiver,
        string message
    );

    struct Message {
        uint256 timestamp;
        string message;
        string name;
    }

    struct Profile {
        string name;
        string imageURI;
        bool registered;
    }

    mapping(address => mapping(address => uint256)) chatsIds;
    mapping(uint256 => Message[]) chats;
    mapping(address => string[]) conversationList;
    mapping(address => mapping(address => bool)) conversationListMapping;

    mapping(address => Profile)  profilesMapping;
    Profile[] profiles; 

    

    function register(string memory _name, string memory _imageUri) external {
        require(ens.getAddressFromName(_name) != address(0), "not a valid ENS");
        require(ens.getAddressFromName(_name) == msg.sender, "ENS does not match your address");
        require(!isRegistered(msg.sender), "You are already registered");
        Profile memory newProfile;
        newProfile.name = _name;
        newProfile.imageURI = _imageUri;
        newProfile.registered = true;

        profilesMapping[msg.sender] = newProfile;
        profiles.push(newProfile);
    }

    function isRegistered(address _user) public view returns (bool){
        return profilesMapping[_user].registered;
    }

    function getProfile(address _user) external view returns(Profile memory){
        require(profilesMapping[_user].registered, "user not registered");
    
        Profile memory profile= profilesMapping[_user];

        return profile;
    }
    //start chat
    function sendMessage(
        string calldata _receiver,
        string calldata _message
    ) external {
        address receiver = ens.getAddressFromName(_receiver);

        require(isRegistered(msg.sender), "You are not registered");
        require(isRegistered(receiver), "Receiver not registered");

        string memory sender = ens.getNameFromAddress(msg.sender);

        uint256 myChatId = chatsIds[msg.sender][receiver];
        uint256 friendChatId = chatsIds[receiver][msg.sender];

        if (myChatId == friendChatId && myChatId == 0) {
            chatId = chatId + 1;
            chatsIds[msg.sender][receiver] = chatId;
            chatsIds[receiver][msg.sender] = chatId;
            myChatId= chatId;
        }

        Message memory newMessage;
        newMessage.name = sender;
        newMessage.message = _message;
        newMessage.timestamp = block.timestamp;
        chats[myChatId].push(newMessage);

        if (!conversationListMapping[msg.sender][receiver]) {
            conversationList[msg.sender].push(_receiver);
            conversationList[receiver].push(sender);

            conversationListMapping[msg.sender][receiver] = true;
            conversationListMapping[receiver][msg.sender] = true;
        }
    }

    //retrieve chats
    function getChats(
        string calldata _receiver
    ) external view returns (Message[] memory) {
        require(isRegistered(msg.sender), "you are not registered");
        address receiver = ens.getAddressFromName(_receiver);
        uint256 myChatId = chatsIds[msg.sender][receiver];
        Message[] memory chat = chats[myChatId];
        return chat;
    }

    function getConversationList() external view returns (string[] memory) {
        return conversationList[msg.sender];
    }
}
