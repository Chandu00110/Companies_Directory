import React from "react";
import { countryToEmoji } from "../utils/flags";

export default function CompanyCard({ c }) {
  const avatarUrl = `https://i.pravatar.cc/64?u=${encodeURIComponent(
    c.contact.email
  )}`;

  return (
    <div className="p-4 rounded bg-slate-900 border border-slate-800">
      <div className="flex justify-between">
        <div className="flex items-center gap-3">
          <img src={avatarUrl} className="w-10 h-10 rounded-full" />
          <div>
            <div className="font-semibold">{c.name}</div>
            <div className="text-xs text-slate-500">
              {c.industry} • {countryToEmoji(c.country)} {c.location}
            </div>
          </div>
        </div>

        <span
          className={`badge ${
            c.status === "Active"
              ? "bg-emerald-600 text-black"
              : "bg-orange-500"
          }`}
        >
          {c.status}
        </span>
      </div>

      <div className="mt-3 flex justify-between text-sm text-slate-300">
        <div>{c.contact.name}</div>
        <div>{c.employee_range}</div>
      </div>
    </div>
  );
}
