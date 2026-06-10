function Sidebar() {
  return (
    <aside className="w-72 border-r border-zinc-800 bg-[#111111] flex flex-col">
      <div className="p-4 border-b border-zinc-800">
        <button className="w-full rounded-lg bg-zinc-800 px-4 py-2 hover:bg-zinc-700">
          + New Chat
        </button>
      </div>

      <div className="flex-1 p-2 space-y-2">
        <div className="rounded-lg p-3 bg-zinc-900 cursor-pointer">
          LLM Council Architecture
        </div>

        <div className="rounded-lg p-3 hover:bg-zinc-900 cursor-pointer">
          Startup Ideas
        </div>

        <div className="rounded-lg p-3 hover:bg-zinc-900 cursor-pointer">
          ML Learning Path
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;