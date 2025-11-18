import React from "react";
import { ExclamationTriangleIcon } from "@heroicons/react/24/outline";
import { motion } from "framer-motion";

export default function DeleteModal({ open, onClose, onConfirm, name }) {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <motion.div initial={{ scale: 0.98, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="w-full max-w-md p-6 bg-slate-900 rounded-xl border border-slate-700">
        <div className="flex items-center gap-3 mb-4">
          <ExclamationTriangleIcon className="w-8 text-red-500" />
          <h3 className="text-lg font-semibold">Delete Company</h3>
        </div>

        <p className="text-slate-300 mb-4">Are you sure you want to delete <strong className="text-white">{name}</strong>?</p>

        <div className="flex justify-end gap-3">
          <button className="px-4 py-2 rounded bg-slate-700" onClick={onClose}>Cancel</button>
          <button className="px-4 py-2 rounded bg-red-600 text-black" onClick={onConfirm}>Delete</button>
        </div>
      </motion.div>
    </div>
  );
}
