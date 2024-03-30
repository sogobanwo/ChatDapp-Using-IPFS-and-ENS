import { useCallback } from "react";
import { isSupportedChain } from "../utils";
import { getProvider } from "../constants/providers";
import {
  useWeb3ModalAccount,
  useWeb3ModalProvider,
} from "@web3modal/ethers/react";
import { getChatContract } from "../constants/contracts";
import { isAddress } from "ethers";

const useSendMessage = (receiver , message ) => {
  const { chainId, address } = useWeb3ModalAccount();
  const { walletProvider } = useWeb3ModalProvider();

  return useCallback(async () => {
    if (!isSupportedChain(chainId)) return console.error("Wrong network");
    if (!isAddress(address)) return console.error("Invalid address");
    const readWriteProvider = getProvider(walletProvider);
    const signer = await readWriteProvider.getSigner();
    const contract = getChatContract(signer);
     

    try {
      const transaction = await contract.sendMessage(message, receiver);
      console.log("transaction: ", transaction);
      const receipt = await transaction.wait();

      console.log("receipt: ", receipt);
      if (receipt.status === 1) {
        // router.push("/users");
      } else {
        console.error("Transaction failed");
      }
    } catch (error) {
      console.log(error);
      console.log("Failed to Transfer");
    }
  }, [message, receiver]);
};

export default useSendMessage;