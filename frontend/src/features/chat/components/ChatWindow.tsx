import MessageBubble from "./MessageBubble";

function ChatWindow() {
  return (
    <div className="flex-1 overflow-y-auto p-8">
      <div className="max-w-4xl mx-auto space-y-6">
        <MessageBubble
          role="user"
          content="Explain transformers in simple language."
        />

        <MessageBubble
          role="assistant"
          model="GPT-4o"
          content="Transformers are neural networks that use attention mechanisms to understand relationships between words."
        />

        <MessageBubble
          role="assistant"
          model="Claude"
          content="Think of attention as giving different importance to different words while reading."
        />
      </div>
    </div>
  );
}

export default ChatWindow;