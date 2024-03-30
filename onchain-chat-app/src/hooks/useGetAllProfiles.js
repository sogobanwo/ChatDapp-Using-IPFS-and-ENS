import { useEffect, useState } from "react";
import { getENSContract } from "../constants/contracts";
import { readOnlyProvider } from "../constants/providers";
import toast from "react-hot-toast";


const useGetAllProfiles = () => {
    const [profiles, setProfiles] = useState({
        loading: true,
        data: [],
    });

    useEffect(() => {
        const contract = getENSContract(readOnlyProvider);

        contract
            .getAllProfiles()
            .then((res) =>
                setProfiles({
                    loading: false,
                    data: res,
                })
            )
            .catch((err) => {
                console.error("error fetching profiles: ", err);
                setProfiles((prev) => ({ ...prev, loading: false }));
            });
    }, []);
    console.log(profiles)
    return profiles;
};

export default useGetAllProfiles;
