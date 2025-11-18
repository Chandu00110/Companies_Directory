import React from "react";

export default function Pagination({ page, setPage, totalPages }) {
  return (
    <div className="max-w-7xl mx-auto p-4 flex justify-between items-center text-slate-400">
      <button
        disabled={page === 1}
        onClick={() => setPage((p) => p - 1)}
        className="px-3 py-1 border rounded disabled:opacity-30"
      >
        Prev
      </button>

      <div>
        Page {page} / {totalPages}
      </div>

      <button
        disabled={page === totalPages}
        onClick={() => setPage((p) => p + 1)}
        className="px-3 py-1 border rounded disabled:opacity-30"
      >
        Next
      </button>
    </div>
  );
}
