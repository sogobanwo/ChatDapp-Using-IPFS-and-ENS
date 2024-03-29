// SPDX-License-Identifier: MIT
pragma solidity ^0.8.23;

import "./IENS.sol";

contract Chat {
    error RECEIVER_DOES_NOT_EXIST();

    IENS public ens;
    uint256 messageId;

    constructor(address ensAddress) {
        ens = IENS(ensAddress);
    }

    event MessageSent(
        address indexed sender,
        address indexed receiver,
        string message
    );

    struct Message {
        string message;
        string receiver;
        string sender;
    }

    mapping (uint => Message) eachChat;

    // mapping(address => mapping(address => uint256)) chatsIds;
    mapping(address => mapping (address => Message[])) chats;

    //start chat
    function sendMessage(
        string calldata _receiver,
        string calldata _message
    ) external {
        
        address msgReceiver = ens.getProfileFromName(_receiver).userAddress;

        if (msgReceiver == address(0)) revert RECEIVER_DOES_NOT_EXIST();

        string memory sender = ens.getProfileFromAddress(msg.sender).name;

        uint _messageId = messageId + 1;

        Message memory mssg = eachChat[_messageId];
        mssg.message = _message;
        mssg.sender = sender;
        mssg.receiver = _receiver;

        chats[msg.sender][msgReceiver].push(mssg);
        chats[msgReceiver][msg.sender].push(mssg);

        messageId++;

    }

    //retrieve chats
    function getChats(
        string calldata _receiver
    ) external view returns (Message[] memory) {
        address msgReceiver = ens.getProfileFromName(_receiver).userAddress;
        if (msgReceiver == address(0)) revert RECEIVER_DOES_NOT_EXIST();

        return chats[msg.sender][msgReceiver];
    }
}
