/**
 * v0 by Vercel.
 * @see https://v0.dev/t/ENHwtSu0ThG
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

const AddFriend = () => {
    return (
        <div className="space-y-6 container mt-8">
            <div className="space-y-2">
                <h2 className="text-3xl font-bold">Add Friends</h2>
                <div className="relative">
                    <SearchIcon className="absolute inset-y-0 left-0 z-10 flex items-center pl-3 h-full pointer-events-none" />
                    <Input className="pl-10" id="search" placeholder="Search by name or username" />
                </div>
            </div>
            <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <div className="flex items-center space-x-4">
                            <img
                                alt="User 1"
                                className="rounded-full"
                                height="56"
                                src="/placeholder.svg"
                                style={{
                                    aspectRatio: "56/56",
                                    objectFit: "cover",
                                }}
                                width="56"
                            />
                            <div className="space-y-1.5">
                                <h3 className="text-lg font-semibold">Alice Johnson</h3>
                                <p className="text-sm text-gray-500 dark:text-gray-400">@alicejohnson</p>
                            </div>
                            <Button size="sm">Add Friend</Button>
                        </div>
                    </div>
                    <div>
                        <div className="flex items-center space-x-4">
                            <img
                                alt="User 2"
                                className="rounded-full"
                                height="56"
                                src="/placeholder.svg"
                                style={{
                                    aspectRatio: "56/56",
                                    objectFit: "cover",
                                }}
                                width="56"
                            />
                            <div className="space-y-1.5">
                                <h3 className="text-lg font-semibold">Ethan Williams</h3>
                                <p className="text-sm text-gray-500 dark:text-gray-400">@ethanwilliams</p>
                            </div>
                            <Button size="sm">Add Friend</Button>
                        </div>
                    </div>
                    <div>
                        <div className="flex items-center space-x-4">
                            <img
                                alt="User 3"
                                className="rounded-full"
                                height="56"
                                src="/placeholder.svg"
                                style={{
                                    aspectRatio: "56/56",
                                    objectFit: "cover",
                                }}
                                width="56"
                            />
                            <div className="space-y-1.5">
                                <h3 className="text-lg font-semibold">Grace Lee</h3>
                                <p className="text-sm text-gray-500 dark:text-gray-400">@gracelee</p>
                            </div>
                            <Button size="sm">Add Friend</Button>
                        </div>
                    </div>
                    <div>
                        <div className="flex items-center space-x-4">
                            <img
                                alt="User 4"
                                className="rounded-full"
                                height="56"
                                src="/placeholder.svg"
                                style={{
                                    aspectRatio: "56/56",
                                    objectFit: "cover",
                                }}
                                width="56"
                            />
                            <div className="space-y-1.5">
                                <h3 className="text-lg font-semibold">Noah Garcia</h3>
                                <p className="text-sm text-gray-500 dark:text-gray-400">@noahgarcia</p>
                            </div>
                            <Button size="sm">Add Friend</Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

function SearchIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.3-4.3" />
        </svg>
    )
}

export default AddFriend