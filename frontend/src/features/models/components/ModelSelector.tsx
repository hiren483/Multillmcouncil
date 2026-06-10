function ModelSelector() {
  return (
    <div className="flex gap-2 flex-wrap">
      <button className="rounded-lg bg-white text-black px-3 py-1 text-sm">
        GPT
      </button>

      <button className="rounded-lg bg-zinc-900 px-3 py-1 text-sm border border-zinc-700">
        Claude
      </button>

      <button className="rounded-lg bg-zinc-900 px-3 py-1 text-sm border border-zinc-700">
        Gemini
      </button>

      <button className="rounded-lg bg-zinc-900 px-3 py-1 text-sm border border-zinc-700">
        DeepSeek
      </button>
    </div>
  );
}

export default ModelSelector;