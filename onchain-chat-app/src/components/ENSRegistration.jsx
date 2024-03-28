import { Label } from "@/components/ui/label";
import { Avatar } from "@/components/ui/avatar"
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";
import { useState } from "react";
import { configureWeb3Modal } from "@/connection";
import useENSRegistration from "@/hooks/useENSRegistration";


const ENSRegistration = () => {
    configureWeb3Modal();


    const [ensName, setEnsName] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const register = useENSRegistration(ensName)



    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);

        try {
            register()
        } catch (error) {
            console.log(error)
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="w-full p-4 space-y-4 container">
            <div className="flex items-center justify-between p-4 border-b">
                <div className="flex items-center space-x-4">
                    <Avatar className="w-10 h-10">
                        <img
                            alt="Avatar"
                            className="rounded-full"
                            height="40"
                            src="/placeholder.svg"
                            style={{
                                aspectRatio: "40/40",
                                objectFit: "cover",
                            }}
                            width="40"
                        />
                    </Avatar>
                    <div className="space-y-1">
                        <h1 className="text-lg font-bold">ENS-Creator</h1>
                        <p className="text-sm text-gray-500 dark:text-gray-400">Come and create your own ENS in minutes</p>
                    </div>
                </div>
                <w3m-button />
            </div>

            <div className="mx-auto max-w-sm space-y-4">
                <div className="space-y-2 text-center">
                    <h1 className="text-3xl font-bold">Create your desired ENS</h1>
                </div>
                <div className="space-y-4">
                    <div className="space-y-2">
                        <Label htmlFor="ENS">ENS Name</Label>
                        <Input id="ENS" placeholder="Enter your desired name" required value={ensName}
                            onChange={(e) => setEnsName(e.target.value)} />
                    </div>
                    <Button className="w-full" disabled={isLoading} onClick={handleSubmit}>{isLoading ? (
                        <>
                            <Loader2 className="animate-spin w-4 h-4 mr-2" />
                            Registering ENS...
                        </>
                    ) : (
                        "Register ENS"
                    )}</Button>

                </div>
            </div>
        </div>

    );
}

export default ENSRegistration


