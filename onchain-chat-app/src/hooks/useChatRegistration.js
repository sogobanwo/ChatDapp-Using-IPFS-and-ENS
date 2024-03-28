import {
    useWeb3ModalAccount,
    useWeb3ModalProvider,
} from "@web3modal/ethers/react";
import { useCallback } from "react";
import { isSupportedChain } from "../utils";
import { isAddress } from "ethers";
import { getProvider } from "../constants/providers";
import { getChatContract } from "../constants/contracts";

const useChatRegistration = (_name, _imageUri) => {
    const { chainId } = useWeb3ModalAccount();
    const { walletProvider } = useWeb3ModalProvider();
    const {address} = useWeb3ModalAccount()


    return useCallback(async () => {
        if (!isSupportedChain(chainId)) return console.error("Wrong network");
        if (!isAddress(address)) return console.error("Invalid address");
        const readWriteProvider = getProvider(walletProvider);
        const signer = await readWriteProvider.getSigner();

        const contract = getChatContract(signer);

        try {
            const transaction = await contract.register(_name, _imageUri);

            console.log("transaction: ", transaction);
            const receipt = await transaction.wait();

            console.log("receipt: ", receipt);

            if (receipt.status) {
                return console.log("Chat registration successful");
            }

            console.log("Chat registration failed");
        } catch (error) {
            console.error(
                "error: ",
                error.reason 
            );
        }
    }, [address, chainId, walletProvider]);
};

export default useChatRegistration;
