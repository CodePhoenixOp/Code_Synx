import { useState } from "react"
import ChatInput from "@/components/chats/ChatInput"
import ChatList from "@/components/chats/ChatList"
import useResponsive from "@/hooks/useResponsive"

const ChatsView = () => {
    const { viewHeight } = useResponsive()
    const [micOn, setMicOn] = useState(true)
    const [speakerOn, setSpeakerOn] = useState(true)

    return (
        <div
            className="flex max-h-full min-h-[400px] w-full flex-col gap-2 p-4"
            style={{ height: viewHeight }}
        >
            {/* Header row with Group Chat + Controls */}
            <div className="flex items-baseline justify-between">
                <h1 className="view-title">Group Chat</h1>

                <div className="flex gap-2 -translate-y-0.5">
                    <button
                        onClick={() => setMicOn(!micOn)}
                        className={`rounded-full px-2 py-1 text-sm shadow-sm transition 
                            ${micOn ? "bg-green-500 text-white" : "bg-red-500 text-white"}`}
                        title={micOn ? "Mic On" : "Mic Off"}
                    >
                        {micOn ? "🎤" : "🔇"}
                    </button>

                    <button
                        onClick={() => setSpeakerOn(!speakerOn)}
                        className={`rounded-full px-2 py-1 text-sm shadow-sm transition 
                            ${speakerOn ? "bg-green-500 text-white" : "bg-red-500 text-white"}`}
                        title={speakerOn ? "Speaker On" : "Speaker Off"}
                    >
                        {speakerOn ? "🔊" : "🔈"}
                    </button>
                </div>
            </div>

            {/* Chat list */}
            <ChatList />

            {/* Chat input */}
            <ChatInput />
        </div>
    )
}

export default ChatsView
