import {
    useWeb3ModalAccount,
    useWeb3ModalProvider,
} from "@web3modal/ethers/react";
import { useCallback } from "react";
import { isSupportedChain } from "../utils";
import { isAddress } from "ethers";
import { getProvider } from "../constants/providers";
import { getENSContract } from "../constants/contracts";

const useENSRegistration = (_name) => {
    const { chainId } = useWeb3ModalAccount();
    const { walletProvider } = useWeb3ModalProvider();
    const {address} = useWeb3ModalAccount()


    return useCallback(async () => {
        if (!isSupportedChain(chainId)) return console.error("Wrong network");
        if (!isAddress(address)) return console.error("Invalid address");
        const readWriteProvider = getProvider(walletProvider);
        const signer = await readWriteProvider.getSigner();

        const contract = getENSContract(signer);

        try {
            const transaction = await contract.setName(_name);

            console.log("transaction: ", transaction);
            const receipt = await transaction.wait();

            console.log("receipt: ", receipt);

            if (receipt.status) {
                return console.log("Name successfully registered");
            }

            console.log("Name registration failed");
        } catch (error) {
            console.error(
                "error: ",
                error.reason || "An unknown error occured" 
            );
        }
    }, [address, chainId, walletProvider]);
};

export default useENSRegistration;
