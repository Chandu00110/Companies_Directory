import React from "react";
import { HomeIcon, BuildingOfficeIcon, UserGroupIcon, Cog6ToothIcon } from "@heroicons/react/24/outline";

export default function Sidebar({ active, setActive }) {
  const items = [
    { key: "dashboard", label: "Dashboard", icon: <HomeIcon className="w-5" /> },
    { key: "companies", label: "Companies", icon: <BuildingOfficeIcon className="w-5" /> },
    { key: "employees", label: "Employees", icon: <UserGroupIcon className="w-5" /> },
    { key: "settings", label: "Settings", icon: <Cog6ToothIcon className="w-5" /> }
  ];

  return (
    <aside className="sidebar hidden lg:block text-slate-300">
      <div className="mb-6">
        <div className="text-lg font-semibold">Acme Corp</div>
        <div className="text-xs text-slate-500">Admin Panel</div>
      </div>

      <nav className="space-y-2">
        {items.map((it) => (
          <div key={it.key} className={`nav-item flex items-center gap-3 ${active === it.key ? "active" : ""}`} onClick={() => setActive(it.key)}>
            {it.icon}
            {it.label}
          </div>
        ))}
      </nav>
    </aside>
  );
}
