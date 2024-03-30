// SPDX-License-Identifier: MIT
pragma solidity ^0.8.23;

import "./IENS.sol";

contract Chat {
    error RECEIVER_DOES_NOT_EXIST();

    struct Message {
        string message;
        address sender;
        address receiver;
    }

    mapping(address => mapping(address => Message[])) private chats;
    mapping(uint256 => Message) private messages;
    uint256 private messageId;
    IENS public ens;

    constructor(address ensAddress) {
        ens = IENS(ensAddress);
    }

    event MessageSent(
        address indexed sender,
        address indexed receiver,
        string message
    );

    function sendMessage(
        string calldata _receiver,
        string calldata _message
    ) external {
        address msgReceiver = ens.getProfileFromName(_receiver).userAddress;
        if (msgReceiver == address(0)) revert RECEIVER_DOES_NOT_EXIST();

        string memory senderName = ens.getProfileFromAddress(msg.sender).name;
        uint256 _messageId = messageId + 1;

        Message storage mssg = messages[_messageId];
        mssg.message = _message;
        mssg.sender = msg.sender;
        mssg.receiver = msgReceiver;

        chats[msg.sender][msgReceiver].push(mssg);
        chats[msgReceiver][msg.sender].push(mssg);

        messageId++;

        emit MessageSent(msg.sender, msgReceiver, _message);
    }

    function getChats(string calldata _receiver)
        external
        view
        returns (Message[] memory)
    {
        address msgReceiver = ens.getProfileFromName(_receiver).userAddress;
        if (msgReceiver == address(0)) revert RECEIVER_DOES_NOT_EXIST();

        return chats[msg.sender][msgReceiver];
    }
}
