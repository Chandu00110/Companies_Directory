import React, { useState, useEffect } from "react";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";

export default function EditCompanyModal({ open, onClose, company, onUpdate }) {
  const [form, setForm] = useState(null);

  useEffect(() => {
    if (company) {
      setForm({
        name: company.name || "",
        industry: company.industry || "",
        location: company.location || "",
        status: company.status || "Active",
        employee_range: company.employee_range || "",
        contact_name: company.contact?.name || "",
        contact_email: company.contact?.email || ""
      });
    }
  }, [company]);

  if (!open || !form) return null;

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  }

  function handleSubmit() {
    if (!form.name || !form.contact_email) {
      onUpdate({ __error: "Name and contact email required" });
      return;
    }
    const updated = {
      ...company,
      name: form.name,
      industry: form.industry,
      location: form.location,
      status: form.status,
      employee_range: form.employee_range,
      contact: { name: form.contact_name, email: form.contact_email }
    };
    onUpdate(updated);
    onClose();
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <motion.div initial={{ y: 12, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="w-full max-w-lg p-6 bg-slate-900 rounded-xl border border-slate-700">
        <div className="flex justify-between mb-4">
          <h3 className="text-lg font-semibold">Edit Company</h3>
          <button onClick={onClose}><XMarkIcon className="w-6" /></button>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <input name="name" value={form.name} onChange={handleChange} placeholder="Company Name" className="p-2 bg-slate-800 rounded border border-slate-700"/>
          <input name="industry" value={form.industry} onChange={handleChange} placeholder="Industry" className="p-2 bg-slate-800 rounded border border-slate-700"/>
          <input name="location" value={form.location} onChange={handleChange} placeholder="Location" className="p-2 bg-slate-800 rounded border border-slate-700"/>
          <input name="employee_range" value={form.employee_range} onChange={handleChange} placeholder="Employee Range" className="p-2 bg-slate-800 rounded border border-slate-700"/>
          <input name="contact_name" value={form.contact_name} onChange={handleChange} placeholder="Contact Person" className="p-2 bg-slate-800 rounded border border-slate-700"/>
          <input name="contact_email" value={form.contact_email} onChange={handleChange} placeholder="Contact Email" className="p-2 bg-slate-800 rounded border border-slate-700"/>
          <select name="status" value={form.status} onChange={handleChange} className="p-2 rounded bg-slate-800 border border-slate-700">
            <option>Active</option>
            <option>Prospect</option>
            <option>Inactive</option>
          </select>
        </div>

        <div className="flex justify-end gap-3 mt-4">
          <button className="px-4 py-2 rounded bg-slate-700" onClick={onClose}>Cancel</button>
          <button className="px-4 py-2 rounded bg-emerald-600 text-black" onClick={handleSubmit}>Update</button>
        </div>
      </motion.div>
    </div>
  );
}
