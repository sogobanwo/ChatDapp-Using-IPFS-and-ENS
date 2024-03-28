/**
 * v0 by Vercel.
 * @see https://v0.dev/t/spfjB1lg8Gg
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"

const Chat = ()=> {
  return (
    <div className="flex flex-col h-screen border-t">
      <div className="flex items-center p-4 border-b">
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
          </div>
        </div>
      </div>
      <div className="flex-1 flex min-h-0">
        <div className="hidden  min-h-0 border-r md:flex">
          <div className="flex-1 min-h-0">
            <div className="grid min-h-0 overflow-y-auto">
              <div className="grid gap-2 p-4">
                <a className="flex items-center gap-4 p-2 rounded-lg" href="#">
                  <Avatar className="w-12 h-12 border-2 border-white dark:border-gray-900">
                    <AvatarImage alt="@johndoe" src="/placeholder-user.jpg" />
                    <AvatarFallback>@johndoe</AvatarFallback>
                  </Avatar>
                  <div className="flex-1 min-h-0">
                    <h3 className="font-semibold">@johndoe</h3>
                    <p className="text-sm truncate">Hey! How's it going? 😄👋</p>
                  </div>
                  <div className="text-sm text-gray-500 min-w-[80px] dark:text-gray-400">2:14 PM</div>
                </a>
                <a className="flex items-center gap-4 p-2 rounded-lg bg-gray-100 dark:bg-gray-800" href="#">
                  <Avatar className="w-12 h-12 border-2 border-white dark:border-gray-900">
                    <AvatarImage alt="@janedoe" src="/placeholder-user.jpg" />
                    <AvatarFallback>@janedoe</AvatarFallback>
                  </Avatar>
                  <div className="flex-1 min-h-0">
                    <h3 className="font-semibold">@janedoe</h3>
                    <p className="text-sm truncate">Not too bad! Just finished my morning coffee. How about you?</p>
                  </div>
                  <div className="text-sm text-gray-500 min-w-[80px] dark:text-gray-400">2:15 PM</div>
                </a>
                <a className="flex items-center gap-4 p-2 rounded-lg" href="#">
                  <Avatar className="w-12 h-12 border-2 border-white dark:border-gray-900">
                    <AvatarImage alt="@elladavis" src="/placeholder-user.jpg" />
                    <AvatarFallback>@elladavis</AvatarFallback>
                  </Avatar>
                  <div className="flex-1 min-h-0">
                    <h3 className="font-semibold">@elladavis</h3>
                    <p className="text-sm truncate">Anyone up for a movie night later? 🍿🎬</p>
                  </div>
                  <div className="text-sm text-gray-500 min-w-[80px] dark:text-gray-400">2:12 PM</div>
                </a>
                <a className="flex items-center gap-4 p-2 rounded-lg" href="#">
                  <Avatar className="w-12 h-12 border-2 border-white dark:border-gray-900">
                    <AvatarImage alt="@mikewilson" src="/placeholder-user.jpg" />
                    <AvatarFallback>@mikewilson</AvatarFallback>
                  </Avatar>
                  <div className="flex-1 min-h-0">
                    <h3 className="font-semibold">@mikewilson</h3>
                    <p className="text-sm truncate">Just posted some photos from my trip! Check them out. 📸</p>
                  </div>
                  <div className="text-sm text-gray-500 min-w-[80px] dark:text-gray-400">2:10 PM</div>
                </a>
                <a className="flex items-center gap-4 p-2 rounded-lg" href="#">
                  <Avatar className="w-12 h-12 border-2 border-white dark:border-gray-900">
                    <AvatarImage alt="@sarahlee" src="/placeholder-user.jpg" />
                    <AvatarFallback>@sarahlee</AvatarFallback>
                  </Avatar>
                  <div className="flex-1 min-h-0">
                    <h3 className="font-semibold">@sarahlee</h3>
                    <p className="text-sm truncate">
                      Just landed in Paris! 🇫🇷 Excited for this trip. Any recommendations?
                    </p>
                  </div>
                  <div className="text-sm text-gray-500 min-w-[80px] dark:text-gray-400">2:08 PM</div>
                </a>
                <a className="flex items-center gap-4 p-2 rounded-lg" href="#">
                  <Avatar className="w-12 h-12 border-2 border-white dark:border-gray-900">
                    <AvatarImage alt="@chrisbrown" src="/placeholder-user.jpg" />
                    <AvatarFallback>@chrisbrown</AvatarFallback>
                  </Avatar>
                  <div className="flex-1 min-h-0">
                    <h3 className="font-semibold">@chrisbrown</h3>
                    <p className="text-sm truncate">
                      Who's up for some weekend hiking? 🥾 Let's enjoy the great outdoors!
                    </p>
                  </div>
                  <div className="text-sm text-gray-500 min-w-[80px] dark:text-gray-400">2:05 PM</div>
                </a>
                <a className="flex items-center gap-4 p-2 rounded-lg" href="#">
                  <Avatar className="w-12 h-12 border-2 border-white dark:border-gray-900">
                    <AvatarImage alt="@laurawilson" src="/placeholder-user.jpg" />
                    <AvatarFallback>@laurawilson</AvatarFallback>
                  </Avatar>
                  <div className="flex-1 min-h-0">
                    <h3 className="font-semibold">@laurawilson</h3>
                    <p className="text-sm truncate">
                      Just got the new book everyone's talking about. Can't wait to dive in! 📚
                    </p>
                  </div>
                  <div className="text-sm text-gray-500 min-w-[80px] dark:text-gray-400">2:00 PM</div>
                </a>
                <a className="flex items-center gap-4 p-2 rounded-lg" href="#">
                  <Avatar className="w-12 h-12 border-2 border-white dark:border-gray-900">
                    <AvatarImage alt="@kevinjones" src="/placeholder-user.jpg" />
                    <AvatarFallback>@kevinjones</AvatarFallback>
                  </Avatar>
                  <div className="flex-1 min-h-0">
                    <h3 className="font-semibold">@kevinjones</h3>
                    <p className="text-sm truncate">
                      Just arrived at the concert venue! 🎵 It's gonna be epic. Who else is here?
                    </p>
                  </div>
                  <div className="text-sm text-gray-500 min-w-[80px] dark:text-gray-400">1:55 PM</div>
                </a>
                <a className="flex items-center gap-4 p-2 rounded-lg" href="#">
                  <Avatar className="w-12 h-12 border-2 border-white dark:border-gray-900">
                    <AvatarImage alt="@emilywhite" src="/placeholder-user.jpg" />
                    <AvatarFallback>@emilywhite</AvatarFallback>
                  </Avatar>
                  <div className="flex-1 min-h-0">
                    <h3 className="font-semibold">@emilywhite</h3>
                    <p className="text-sm truncate">
                      Just finished my workout! 💪 Now time for a healthy smoothie. Who wants to join?
                    </p>
                  </div>
                  <div className="text-sm text-gray-500 min-w-[80px] dark:text-gray-400">1:50 PM</div>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-1 flex flex-col min-h-0">
          <div className="border-b">
            <div className="grid grid-cols-2 p-4">
              <div className="flex items-center space-x-4">
                <Avatar className="w-10 h-10 border-2 border-white dark:border-gray-900">
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
                  <AvatarFallback>Chats</AvatarFallback>
                </Avatar>
                <h1 className="text-xl font-bold leading-none">John Doe</h1>
              </div>
              <div className="flex items-center justify-end space-x-4">
                <Button size="icon" variant="ghost">
                  <VideoIcon className="w-6 h-6" />
                  <span className="sr-only">Video call</span>
                </Button>
                <Button size="icon" variant="ghost">
                  <PhoneIcon className="w-6 h-6" />
                  <span className="sr-only">Phone call</span>
                </Button>
              </div>
            </div>
          </div>
          <div className="flex-1 flex flex-col min-h-0 overflow-auto">
            <div className="grid gap-4 p-4">
              <div className="flex items-start gap-4">
                <Avatar className="w-10 h-10 border-2 border-white dark:border-gray-900">
                  <AvatarImage alt="@johndoe" src="/placeholder-user.jpg" />
                  <AvatarFallback>@johndoe</AvatarFallback>
                </Avatar>
                <div className="bg-gray-100 rounded-xl p-4 dark:bg-gray-800">
                  <p>Hey! How's it going? 😄👋</p>
                  <div className="text-sm text-gray-500 dark:text-gray-400">2:14 PM</div>
                </div>
              </div>
              <div className="flex items-start gap-4 ml-auto">
                <Avatar className="w-10 h-10 border-2 border-white dark:border-gray-900">
                  <AvatarImage alt="@elladavis" src="/placeholder-user.jpg" />
                  <AvatarFallback>@elladavis</AvatarFallback>
                </Avatar>
                <div className="rounded-xl bg-gray-100 p-4 dark:bg-gray-800">
                  <p>Not too bad! Just finished my morning coffee. How about you?</p>
                  <div className="text-sm text-gray-500 dark:text-gray-400">2:15 PM</div>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Avatar className="w-10 h-10 border-2 border-white dark:border-gray-900">
                  <AvatarImage alt="@janedoe" src="/placeholder-user.jpg" />
                  <AvatarFallback>@janedoe</AvatarFallback>
                </Avatar>
                <div className="rounded-xl bg-gray-100 p-4 dark:bg-gray-800">
                  <p>Anyone up for a movie night later? 🍿🎬</p>
                  <div className="text-sm text-gray-500 dark:text-gray-400">2:12 PM</div>
                </div>
              </div>
              <div className="flex items-start gap-4 ml-auto">
                <Avatar className="w-10 h-10 border-2 border-white dark:border-gray-900">
                  <AvatarImage alt="@elladavis" src="/placeholder-user.jpg" />
                  <AvatarFallback>@elladavis</AvatarFallback>
                </Avatar>
                <div className="rounded-xl bg-gray-100 p-4 dark:bg-gray-800">
                  <p>Not too bad! Just finished my morning coffee. How about you?</p>
                  <div className="text-sm text-gray-500 dark:text-gray-400">2:15 PM</div>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Avatar className="w-10 h-10 border-2 border-white dark:border-gray-900">
                  <AvatarImage alt="@janedoe" src="/placeholder-user.jpg" />
                  <AvatarFallback>@janedoe</AvatarFallback>
                </Avatar>
                <div className="rounded-xl bg-gray-100 p-4 dark:bg-gray-800">
                  <p>Anyone up for a movie night later? 🍿🎬</p>
                  <div className="text-sm text-gray-500 dark:text-gray-400">2:12 PM</div>
                </div>
              </div>
              <div className="flex items-start gap-4 ml-auto">
                <Avatar className="w-10 h-10 border-2 border-white dark:border-gray-900">
                  <AvatarImage alt="@elladavis" src="/placeholder-user.jpg" />
                  <AvatarFallback>@elladavis</AvatarFallback>
                </Avatar>
                <div className="rounded-xl bg-gray-100 p-4 dark:bg-gray-800">
                  <p>Not too bad! Just finished my morning coffee. How about you?</p>
                  <div className="text-sm text-gray-500 dark:text-gray-400">2:15 PM</div>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Avatar className="w-10 h-10 border-2 border-white dark:border-gray-900">
                  <AvatarImage alt="@janedoe" src="/placeholder-user.jpg" />
                  <AvatarFallback>@janedoe</AvatarFallback>
                </Avatar>
                <div className="rounded-xl bg-gray-100 p-4 dark:bg-gray-800">
                  <p>Anyone up for a movie night later? 🍿🎬</p>
                  <div className="text-sm text-gray-500 dark:text-gray-400">2:12 PM</div>
                </div>
              </div>
              <div className="flex items-start gap-4 ml-auto">
                <Avatar className="w-10 h-10 border-2 border-white dark:border-gray-900">
                  <AvatarImage alt="@elladavis" src="/placeholder-user.jpg" />
                  <AvatarFallback>@elladavis</AvatarFallback>
                </Avatar>
                <div className="rounded-xl bg-gray-100 p-4 dark:bg-gray-800">
                  <p>Not too bad! Just finished my morning coffee. How about you?</p>
                  <div className="text-sm text-gray-500 dark:text-gray-400">2:15 PM</div>
                </div>
              </div>
            </div>
          </div>
          <div className="border-t">
            <div className="flex items-center p-2">
              <Textarea className="min-h-[60px] resize-none" placeholder="Type a message..." />
              <Button className="ml-2">
                <SendIcon className="w-4 h-4" />
                <span className="sr-only">Send</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function PhoneIcon(props) {
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
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  )
}


function SendIcon(props) {
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
      <path d="m22 2-7 20-4-9-9-4Z" />
      <path d="M22 2 11 13" />
    </svg>
  )
}


function VideoIcon(props) {
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
      <path d="m22 8-6 4 6 4V8Z" />
      <rect width="14" height="12" x="2" y="6" rx="2" ry="2" />
    </svg>
  )
}

export default Chat;