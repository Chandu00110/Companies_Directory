import React from "react";
import DarkToggle from "./DarkToggle";
import { PlusCircleIcon } from "@heroicons/react/24/outline";

export default function Header({ onAdd }) {
  return (
    <header className="p-4 bg-gradient-to-r from-slate-900 to-slate-800 sticky top-0 z-40">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div>
          <div className="text-lg font-semibold">Companies</div>
          <div className="text-xs text-slate-400">Directory Admin</div>
        </div>

        <div className="flex items-center gap-3">
          <DarkToggle />
          <button onClick={onAdd} className="px-3 py-1 flex items-center gap-2 bg-emerald-600 rounded text-black">
            <PlusCircleIcon className="w-5" /> Add Company
          </button>
        </div>
      </div>
    </header>
  );
}
