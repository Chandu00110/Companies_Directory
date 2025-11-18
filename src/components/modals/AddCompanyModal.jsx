import React, { useState } from "react";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";

export default function AddCompanyModal({ open, onClose, onSave }) {
  const [form, setForm] = useState({
    name: "",
    industry: "",
    location: "",
    status: "Active",
    employee_range: "",
    contact_name: "",
    contact_email: ""
  });

  if (!open) return null;

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  }

  function handleSubmit() {
    // basic validation
    if (!form.name || !form.contact_email) {
      // let parent show toast
      onSave({ __error: "Name and contact email are required" });
      return;
    }
    onSave(form);
    // reset
    setForm({
      name: "",
      industry: "",
      location: "",
      status: "Active",
      employee_range: "",
      contact_name: "",
      contact_email: ""
    });
    onClose();
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <motion.div
        initial={{ scale: 0.96, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.96, opacity: 0 }}
        className="w-full max-w-lg p-6 bg-slate-900 rounded-xl border border-slate-700"
      >
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold">Add New Company</h3>
          <button onClick={onClose} aria-label="close">
            <XMarkIcon className="w-6" />
          </button>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <input name="name" value={form.name} onChange={handleChange}
            placeholder="Company Name" className="p-2 bg-slate-800 rounded border border-slate-700"/>
          <input name="industry" value={form.industry} onChange={handleChange}
            placeholder="Industry" className="p-2 bg-slate-800 rounded border border-slate-700"/>
          <input name="location" value={form.location} onChange={handleChange}
            placeholder="Location" className="p-2 bg-slate-800 rounded border border-slate-700"/>
          <input name="employee_range" value={form.employee_range} onChange={handleChange}
            placeholder="Employee Range" className="p-2 bg-slate-800 rounded border border-slate-700"/>
          <input name="contact_name" value={form.contact_name} onChange={handleChange}
            placeholder="Contact Person" className="p-2 bg-slate-800 rounded border border-slate-700"/>
          <input name="contact_email" value={form.contact_email} onChange={handleChange}
            placeholder="Contact Email" className="p-2 bg-slate-800 rounded border border-slate-700"/>
          <select name="status" value={form.status} onChange={handleChange}
            className="p-2 rounded bg-slate-800 border border-slate-700">
            <option>Active</option>
            <option>Prospect</option>
            <option>Inactive</option>
          </select>
        </div>

        <div className="flex justify-end gap-3 mt-4">
          <button className="px-4 py-2 rounded bg-slate-700" onClick={onClose}>Cancel</button>
          <button className="px-4 py-2 rounded bg-emerald-600 text-black" onClick={handleSubmit}>Save</button>
        </div>
      </motion.div>
    </div>
  );
}
