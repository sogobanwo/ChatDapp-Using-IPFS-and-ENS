import {
    useWeb3ModalAccount,
    useWeb3ModalProvider,
} from "@web3modal/ethers/react";
import { useCallback } from "react";
import { isSupportedChain } from "../utils";
import { isAddress } from "ethers";
import { getProvider } from "../constants/providers";
import { getENSContract } from "../constants/contracts";
import toast from "react-hot-toast";


const useENSRegistration = (_name, _imageUri) => {
    const { chainId } = useWeb3ModalAccount();
    const { walletProvider } = useWeb3ModalProvider();
    const { address } = useWeb3ModalAccount()


    return useCallback(async () => {
        if (!isSupportedChain(chainId)) return console.error("Wrong network");
        if (!isAddress(address)) return console.error("Invalid address");
        const readWriteProvider = getProvider(walletProvider);
        const signer = await readWriteProvider.getSigner();

        const contract = getENSContract(signer);

        const loadingToast1 = toast.loading('Creating your ENS name..');
        try {

            const transaction = await contract.setName(_name, _imageUri);

            console.log("transaction: ", transaction);
            const receipt = await transaction.wait();

            console.log("receipt: ", receipt);

            if (receipt.status) 
                toast.remove(loadingToast1)
                toast.success(`ENS Name Created`)
                console.log("ENS registration successful");
                return true
            
        } catch (error) {
            toast.remove(loadingToast1)
            toast.error("Name already registered")
            console.error(
                error.reason
            );
        }
    }, [address, chainId, walletProvider]);
};

export default useENSRegistration;
