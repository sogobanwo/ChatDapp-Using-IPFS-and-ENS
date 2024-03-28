import { Label } from "@/components/ui/label";
import { Avatar } from "@/components/ui/avatar"
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Camera, Loader2 } from "lucide-react";
import { useState } from "react";
import axios from "axios";

const ChatRegistration = () => {
    const [selectedFile, setSelectedFile] = useState();
    const [ensName, setEnsName] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const handleSelectImage = ({ target }) => {
        setSelectedFile(target.files[0]);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);

        try {
            const formData = new FormData();
            formData.append("file", selectedFile);

            const response = await axios.post(
                "https://api.pinata.cloud/pinning/pinFileToIPFS",
                formData,
                {
                    headers: {
                        "Content-Type": "multipart/form-data",
                        pinata_api_key: import.meta.env.VITE_PINATA_API_KEY,
                        pinata_secret_api_key: import.meta.env.VITE_PINATA_SECRET_API_KEY,
                    },
                }
            );

            const fileUrl = `https://gateway.pinata.cloud/ipfs/${response.data.IpfsHash}`;
            console.log("File URL:", fileUrl);
        } catch (error) {
            console.log("Pinata API Error:", error);
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
                        <h1 className="text-lg font-bold">Chats</h1>
                        <p className="text-sm text-gray-500 dark:text-gray-400">Chatting with @johndoe</p>
                    </div>
                </div>
                <ConnectButton />
            </div>

            <div className="mx-auto max-w-sm space-y-4">
                <div className="space-y-2 text-center">
                    <h1 className="text-3xl font-bold">Register to chat with other members</h1>
                </div>
                <div className="space-y-4">
                    <div className="space-y-2">
                        <Label htmlFor="ENS">ENS Name</Label>
                        <Input id="ENS" placeholder="Enter your desired name" required value={ensName}
                            onChange={(e) => setEnsName(e.target.value)} />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="picture">Desired Avatar</Label>
                        <Input id="picture" type="file"
                            accept="image/*"
                            className=" w-full"
                            onChange={handleSelectImage} />
                        <label
                            className="rounded-full  bg-secondary flex items-center justify-center cursor-pointer">
                            {selectedFile ? (
                                <img
                                    src={URL.createObjectURL(selectedFile)}
                                    className="w-full h-full object-cover rounded-full"
                                />
                            ) : (
                                <Camera className="w-16 h-16 text-muted-foreground" />
                            )}
                        </label>
                    </div>
                    <Button className="w-full" disabled={isLoading} onClick={handleSubmit}>{isLoading ? (
                        <>
                            <Loader2 className="animate-spin w-4 h-4 mr-2" />
                            Registering User...
                        </>
                    ) : (
                        "Register User"
                    )}</Button>

                </div>
            </div>
        </div>

    );
}

export default ChatRegistration


