// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import {Test, console} from "../lib/forge-std";
import {Chat} from "../src/Chat.sol";
import {ENS} from "../src/ENS.sol";

contract CounterTest is Test {
    ENS public ens;
    Chat public chat;

    address SogoAddr = address(0x477b144FbB1cE15554927587f18a27b241126FBC);
    address BanwoAddr = address(0xe902aC65D282829C7a0c42CAe165D3eE33482b9f);

    function setUp() public {
        ens = new ENS();
        chat = new Chat(address(ens));

        switchSigner(SogoAddr);
        ens.setName("Sogo");

        switchSigner(BanwoAddr);
        ens.setName("Banwo");
    }

    function test_SetName() public view {
        assertEq(ens.getNameFromAddress(SogoAddr), "Sogo");
        assertEq(ens.getNameFromAddress(BanwoAddr), "Banwo");
    }

    function test_SendMessage() public {
        switchSigner(SogoAddr);
        chat.sendMessage("Banwo", "Hello");
        assertEq(chat.getSentMessages("Banwo")[0], "Hello");
    }

    function test_getMessage() public {
        switchSigner(SogoAddr);
        chat.sendMessage("Banwo", "Hello");

        switchSigner(BanwoAddr);

        console.log("log array");        
        console.log(chat.getChats("Sogo")[0]);
        assertEq(chat.getChats("Sogo")[0], "Hello");
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

    // function testFuzz_SetNumber(uint256 x) public {
    //     chat.setNumber(x);
    //     assertEq(chat.number(), x);
    // }
}
