import { useEffect, useState } from "react";
import { getChatContract } from "../constants/contracts";
import { readOnlyProvider } from "../constants/providers";
import toast from "react-hot-toast";


const useGetMessage = (_receiver) => {
    const [chats, setChats] = useState({
        loading: true,
        data: [],
    });

    useEffect(() => {
        const contract = getChatContract(readOnlyProvider);

        contract
            .getChats(_receiver)
            .then((res) =>
                setChats({
                    loading: false,
                    data: res,
                })
            )
            .catch((err) => {
                console.error("error fetching chats: ", err);
                setChats((prev) => ({ ...prev, loading: false }));
            });
    }, []);
    console.log(chats)
    return chats;
};

export default useGetMessage;
