import ModelSelector from "../../models/components/ModelSelector";

function ChatInput() {
  return (
    <div className="border-t border-zinc-800 p-4">
      <div className="max-w-4xl mx-auto">
        <ModelSelector />

        <div className="mt-3 flex gap-3">
          <input
            type="text"
            placeholder="Message LLM Council..."
            className="flex-1 rounded-xl border border-zinc-700 bg-zinc-900 px-4 py-3 outline-none focus:border-zinc-500"
          />

          <button className="rounded-xl bg-white text-black px-5 py-3 font-medium">
            Send
          </button>
        </div>
      </div>
    </div>
  );
}

export default ChatInput;