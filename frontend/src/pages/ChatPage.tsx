import Sidebar from "../features/conversation/components/Sidebar";
import ChatWindow from "../features/chat/components/ChatWindow";
import ChatInput from "../features/chat/components/ChatInput";

function ChatPage() {
  return (
    <div className="h-screen flex bg-[#0A0A0A] text-white">
      <Sidebar />

      <main className="flex-1 flex flex-col">
        <ChatWindow />
        <ChatInput />
      </main>
    </div>
  );
}

export default ChatPage;