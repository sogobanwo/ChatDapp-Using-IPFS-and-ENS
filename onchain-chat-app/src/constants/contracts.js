import { ethers } from "ethers";
import Abi from "./abi.json";
import ENSAbi from "./ensAbi.json"

export const getChatContract = (providerOrSigner) =>
    new ethers.Contract(
        import.meta.env.VITE_CHAT_APP_CONTRACT,
        Abi,
        providerOrSigner
    );

export const getENSContract = (providerOrSigner) =>
new ethers.Contract(
    import.meta.env.VITE_ENS_CONTRACT,
    ENSAbi,
    providerOrSigner
);
