import { Avatar } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Camera, Loader2 } from "lucide-react";
import { useState } from "react";
import axios from "axios";
import { configureWeb3Modal } from "@/connection";
import useENSRegistration from "@/hooks/useENSRegistration";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
import { Toaster } from "react-hot-toast";

const ENSRegistration = () => {
  const [selectedFile, setSelectedFile] = useState();
  const [ensName, setEnsName] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [imageUri, setImageUri] = useState("");
  const navigate = useNavigate();

  const register = useENSRegistration();

  configureWeb3Modal();

  const handleSelectImage = ({ target }) => {
    setSelectedFile(target.files[0]);
  };

  const uploadImageToIPFS = async () => {
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
            pinata_secret_api_key:
              import.meta.env.VITE_PINATA_SECRET_API_KEY,
          },
        }
      );

      const cid = response.data.IpfsHash;
      setImageUri(cid);
      return cid;
    } catch (error) {
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
        const cid = await uploadImageToIPFS();
      await register.ddd(ensName, cid);
      navigate("/chat");
    } finally {
      setIsLoading(false);
    }
  };
    return (
        <>
        <div className="w-full p-4 space-y-4 container">
            <div className="flex items-center justify-between p-4 border-b">
                <div className="flex items-center space-x-4">
                    <Avatar className="w-10 h-10">
                        <img
                            alt="Avatar"
                            className="rounded-full"
                            height="40"
                            src={logo}
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
                <w3m-button />
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
        <Toaster />
</>

    );
}

export default ENSRegistration


