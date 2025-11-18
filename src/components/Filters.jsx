import React, { useState } from "react";
import { ChevronDownIcon, XMarkIcon } from "@heroicons/react/24/outline";

export default function Filters({
  search,
  setSearch,
  location,
  setLocation,
  industry,
  setIndustry,
  locations,
  industries,
  sortDirection,
  setSortDirection,
  onClear,
  appliedFilters,
  removeFilter
}) {
  // Note: for simplicity we provide multi-select via comma-separated picks in this version.
  // Alternatively we can implement a dropdown with checkboxes (longer code).
  const [localSearch, setLocalSearch] = useState(search || "");

  return (
    <div className="max-w-7xl mx-auto p-4">
      <div className="bg-slate-800/60 px-4 py-4 rounded flex flex-col md:flex-row gap-3 items-center">
        <input
          value={localSearch}
          onChange={(e) => { setLocalSearch(e.target.value); setSearch(e.target.value); }}
          placeholder="Search companies..."
          className="px-3 py-2 bg-slate-900 border border-slate-700 rounded w-full"
        />

        <select value={location} onChange={(e)=>setLocation(e.target.value)} className="px-3 py-2 bg-slate-900 border border-slate-700 rounded">
          <option value="">All Locations</option>
          {locations.map(l => <option key={l} value={l}>{l}</option>)}
        </select>

        <select value={industry} onChange={(e)=>setIndustry(e.target.value)} className="px-3 py-2 bg-slate-900 border border-slate-700 rounded">
          <option value="">All Industries</option>
          {industries.map(i => <option key={i} value={i}>{i}</option>)}
        </select>

        <button onClick={()=>setSortDirection(sortDirection==='asc'?'desc':'asc')} className="px-3 py-2 border rounded">Sort {sortDirection==='asc'?'▲':'▼'}</button>
        <button onClick={onClear} className="px-3 py-2 border rounded">Clear</button>
      </div>

      <div className="max-w-7xl mx-auto mt-2 flex gap-2 flex-wrap">
        {(appliedFilters || []).map(f => (
          <div key={f.key} className="px-2 py-1 bg-slate-700 rounded flex items-center gap-2">
            <span className="text-sm">{f.label}</span>
            <button onClick={()=>removeFilter(f.key)}><XMarkIcon className="w-4 text-slate-300" /></button>
          </div>
        ))}
      </div>
    </div>
  );
}
