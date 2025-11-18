import React from "react";
import CompanyRow from "./CompanyRow";
import CompanyCard from "./CompanyCard";
import { motion, AnimatePresence } from "framer-motion";

export default function CompaniesTable({ companies, view, selected, setSelected, onRowClick, onEdit, onDelete }) {
  if (companies.length === 0) return <div className="p-6 text-center text-slate-400">No companies</div>;

  if (view === "board") {
    return (
      <div className="max-w-7xl mx-auto p-4 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <AnimatePresence>
          {companies.map(c => (
            <motion.div key={c.id} initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 6 }}>
              <CompanyCard c={c} />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto overflow-x-auto p-4">
      <table className="min-w-full sticky-header">
        <thead>
          <tr className="text-slate-400">
            <th className="p-3">
              <input type="checkbox" onChange={(e) => {
                if (e.target.checked) setSelected(new Set(companies.map(c => c.id)));
                else setSelected(new Set());
              }} />
            </th>
            <th className="p-3">Company</th>
            <th className="p-3">Industry</th>
            <th className="p-3">Location</th>
            <th className="p-3">Status</th>
            <th className="p-3">Contact</th>
            <th className="p-3">Employees</th>
            <th className="p-3">Actions</th>
          </tr>
        </thead>

        <tbody>
  <AnimatePresence>
    {companies.map(c => (
      <motion.tr
        key={c.id}
        initial={{ opacity: 0, y: 6 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 6 }}
        className={selected.has(c.id) ? "bg-slate-800/50" : ""}
      >
        <CompanyRow
          c={c}
          selected={selected.has(c.id)}
          toggle={() => {
            const s = new Set(selected);
            s.has(c.id) ? s.delete(c.id) : s.add(c.id);
            setSelected(s);
          }}
          onRowClick={() => onRowClick(c)}
          onEdit={() => onEdit(c)}
          onDelete={() => onDelete(c)}
        />
      </motion.tr>
    ))}
  </AnimatePresence>
</tbody>

      </table>
    </div>
  );
}
