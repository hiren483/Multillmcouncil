type Props = {
  role: "user" | "assistant";
  content: string;
  model?: string;
};

function MessageBubble({ role, content, model }: Props) {
  const isUser = role === "user";

  return (
    <div className={`flex ${isUser ? "justify-end" : "justify-start"}`}>
      <div
        className={`max-w-2xl rounded-2xl px-4 py-3 ${
          isUser
            ? "bg-white text-black"
            : "bg-zinc-900 border border-zinc-800"
        }`}
      >
        {model && (
          <div className="text-xs text-zinc-400 mb-2">
            {model}
          </div>
        )}

        <p>{content}</p>
      </div>
    </div>
  );
}

export default MessageBubble;