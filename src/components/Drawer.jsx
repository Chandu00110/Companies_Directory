import React from "react";

export default function Drawer({ open, company, onClose, onEdit, onDelete }) {
  if (!open) return null;
  return (
    <div className={`drawer open`}>
      <div className="p-5">
        <div className="flex items-center justify-between">
          <div>
            <div className="text-xl font-semibold">{company?.name}</div>
            <div className="text-sm text-slate-400">{company?.industry} • {company?.location}</div>
          </div>
          <div className="flex gap-2">
            <button className="px-3 py-1 border rounded" onClick={() => onEdit && onEdit(company)}>Edit</button>
            <button className="px-3 py-1 bg-red-600 text-black rounded" onClick={() => onDelete && onDelete(company)}>Delete</button>
            <button onClick={onClose} className="px-2 py-1 border rounded">Close</button>
          </div>
        </div>

        <div className="mt-4 text-slate-300 space-y-3">
          <div><strong>Status:</strong> {company?.status}</div>
          <div><strong>Employees:</strong> {company?.employee_range}</div>
          <div><strong>Website:</strong> <a className="text-emerald-400" href={company?.website} target="_blank" rel="noreferrer">{company?.website}</a></div>
          <div><strong>Contact:</strong> {company?.contact?.name} — {company?.contact?.email}</div>
        </div>
      </div>
    </div>
  );
}
