import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Toast({ toasts, removeToast }) {
  // toasts: [{id, type: 'success'|'error', title, message'}]
  useEffect(() => {
    if (!toasts || toasts.length === 0) return;
    const timers = toasts.map(t => setTimeout(() => removeToast(t.id), 4000));
    return () => timers.forEach(clearTimeout);
  }, [toasts, removeToast]);

  return (
    <div className="fixed right-4 bottom-4 flex flex-col gap-2 z-60">
      <AnimatePresence>
        {toasts.map(t => (
          <motion.div key={t.id} initial={{ x: 20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} exit={{ x: 20, opacity: 0 }} className={`p-3 rounded shadow ${t.type==='success'?'bg-emerald-500 text-black':'bg-red-600 text-white'}`}>
            <div className="font-semibold">{t.title}</div>
            <div className="text-sm">{t.message}</div>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}
