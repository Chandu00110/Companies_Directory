import React from "react";
import { countryToEmoji } from "../utils/flags";
import { PencilSquareIcon, TrashIcon, EyeIcon } from "@heroicons/react/24/outline";

export default function CompanyRow({
  c,
  selected,
  toggle,
  onRowClick,
  onEdit,
  onDelete
}) {
  const avatarUrl = `https://i.pravatar.cc/48?u=${encodeURIComponent(
    c.contact?.email || c.avatar_seed || c.id
  )}`;

  return (
    <>
      <td className="p-3">
        <input type="checkbox" checked={selected} onChange={toggle} />
      </td>

      <td className="p-3 cursor-pointer" onClick={onRowClick}>
        <div className="flex items-center gap-3">
          <img src={avatarUrl} className="w-9 h-9 rounded-full object-cover" />
          <div>
            <div className="font-semibold">{c.name}</div>
            <div className="text-xs text-slate-400">{c.industry}</div>
          </div>
        </div>
      </td>

      <td className="p-3">{c.industry}</td>

      <td className="p-3">
        {countryToEmoji(c.country)} {c.location}
      </td>

      <td className="p-3">
        <span
          className={`badge ${
            c.status === "Active"
              ? "bg-emerald-600 text-black"
              : "bg-orange-500 text-black"
          }`}
        >
          {c.status}
        </span>
      </td>

      <td className="p-3 flex items-center gap-2">
        <img src={avatarUrl} className="w-8 h-8 rounded-full object-cover" />
        {c.contact?.name}
      </td>

      <td className="p-3">{c.employee_range}</td>

      <td className="p-3 flex gap-2">
        <button onClick={onRowClick}>
          <EyeIcon className="w-5 text-blue-400" />
        </button>
        <button onClick={onEdit}>
          <PencilSquareIcon className="w-5 text-emerald-400" />
        </button>
        <button onClick={onDelete}>
          <TrashIcon className="w-5 text-red-400" />
        </button>
      </td>
    </>
  );
}
