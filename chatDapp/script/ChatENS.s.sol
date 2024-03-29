// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import "forge-std/Script.sol";
import {Chat} from "../src/Chat.sol";
import {ENS} from "../src/ENS.sol";

contract ChatENSScript is Script {
    ENS public dENS;
    Chat public dChat;

    function setUp() public {}

    function run() public {
        uint privateKey = vm.envUint("PRIVATE_KEY");
        vm.startBroadcast(privateKey);
        dENS = new ENS();
        dChat = new Chat(address(dENS));
        vm.stopBroadcast();
    }
}
