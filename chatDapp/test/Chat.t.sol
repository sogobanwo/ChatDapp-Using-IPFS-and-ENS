// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import "forge-std/Test.sol";
import {Chat} from "../src/Chat.sol";
import {ENS} from "../src/ENS.sol";

contract ChatENSTest is Test {
    ENS public dENS;
    Chat public dChat;

    struct ENSProfile {
        address userAddress;
        string name;
        string imageUri;
    }
    address A = address(0xa);
    address B = address(0xb);

    function setUp() public {
        //deploy facets
        dENS = new ENS();
        dChat = new Chat(address(dENS));

        //make addresses
        A = mkaddr("Account A");
        B = mkaddr("Account B");
    }

    // ENS Contract TEST
    function testSetNameRevertWith() public {
        switchSigner(A);
        dENS.setName("SOGO", "QGYSIUHD");

        switchSigner(B);

        vm.expectRevert(
            abi.encodeWithSelector(ENS.NAME_ALREADY_EXISTED.selector)
        );

        dENS.setName("SOGO", "DUTFDYUUY");
    }

    function testSetNameFromAddress() public {
        switchSigner(A);
        dENS.setName("SOGO", "QGYSIUHD");
        string memory _name = dENS.getProfileFromAddress(A).name;

        vm.assertEq(_name, "SOGO");
    }

    function testSetNameFromName() public {
        switchSigner(A);
        dENS.setName("SOGO", "QGYSIUHD");
        address _address = dENS.getProfileFromName("SOGO").userAddress;

        vm.assertEq(_address, A);
    }

    // CHAT Contract TEST 

     function testSendMesaageRevertWithReceiverDoesNotExist() public {
        switchSigner(A);
        dENS.setName("SOGO", "QGYSIUHD");

        
        vm.expectRevert(
            abi.encodeWithSelector(Chat.RECEIVER_DOES_NOT_EXIST.selector)
        );

        dChat.sendMessage("SAM", "DUTFDYUUY");
    }

    function testSendMesaage() public {
        switchSigner(A);
        dENS.setName("SOGO", "QGYSIUHD");

        switchSigner(B);
        dENS.setName("SAM", "QGYSIUHD");


        switchSigner(A);
        dChat.sendMessage("SAM", "This is my message");

        string memory _message = dChat.getChats("SAM")[0].message;

        assertEq(_message, "This is my message");

    }

    function mkaddr(string memory name) public returns (address) {
        address addr = address(
            uint160(uint256(keccak256(abi.encodePacked(name))))
        );
        vm.label(addr, name);
        return addr;
    }

    function switchSigner(address _newSigner) public {
        address foundrySigner = 0x1804c8AB1F12E6bbf3894d4083f33e07309d1f38;
        if (msg.sender == foundrySigner) {
            vm.startPrank(_newSigner);
        } else {
            vm.stopPrank();
            vm.startPrank(_newSigner);
        }
    }
}
