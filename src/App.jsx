import React, { useEffect, useMemo, useState, useCallback } from "react";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Filters from "./components/Filters";
import CompaniesTable from "./components/CompaniesTable";
import Pagination from "./components/Pagination";
import Drawer from "./components/Drawer";
import { useCompaniesContext } from "./context/CompaniesContext";
import { sortByName } from "./utils/sort";
import AddCompanyModal from "./components/modals/AddCompanyModal";
import EditCompanyModal from "./components/modals/EditCompanyModal";
import DeleteModal from "./components/modals/DeleteModal";
import BulkDeleteModal from "./components/modals/BulkDeleteModal";
import Toast from "./components/Toast";
import useDebounce from "./utils/useDebounce";

export default function App() {
  const { companies: ctxCompanies, loading: ctxLoading, error: ctxError } = useCompaniesContext();

  // initialize local companies only when context data loaded (fix for empty start)
  const [companies, setCompanies] = useState([]);
  useEffect(() => {
    if (ctxCompanies && ctxCompanies.length > 0) {
      setCompanies(ctxCompanies);
    }
  }, [ctxCompanies]);

  // toasts
  const [toasts, setToasts] = useState([]);
  function pushToast(t) {
    const id = Date.now() + Math.random();
    setToasts((s) => [...s, { ...t, id }]);
  }
  function removeToast(id) { setToasts((s) => s.filter(t => t.id !== id)); }

  // UI state
  const [activeNav, setActiveNav] = useState("companies");
  const [view, setView] = useState("table");
  const [search, setSearch] = useState("");
  const debouncedSearch = useDebounce(search, 300);
  const [location, setLocation] = useState("");
  const [industry, setIndustry] = useState("");
  const [sortDirection, setSortDirection] = useState("asc");
  const [selected, setSelected] = useState(new Set());
  const [page, setPage] = useState(1);

  // drawer & modals
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [drawerCompany, setDrawerCompany] = useState(null);
  const [addOpen, setAddOpen] = useState(false);
  const [editOpen, setEditOpen] = useState(false);
  const [deleteOpen, setDeleteOpen] = useState(false);
  const [bulkDeleteOpen, setBulkDeleteOpen] = useState(false);
  const [editingCompany, setEditingCompany] = useState(null);
  const [deletingCompany, setDeletingCompany] = useState(null);

  // derived lists
  const locations = useMemo(() => [...new Set(companies.map(c => c.location))].filter(Boolean), [companies]);
  const industries = useMemo(() => [...new Set(companies.map(c => c.industry))].filter(Boolean), [companies]);

  // CRUD operations
  const addCompany = useCallback((data) => {
    if (data.__error) { pushToast({ type: "error", title: "Invalid", message: data.__error }); return; }
    const newCompany = {
      id: Date.now(),
      name: data.name,
      industry: data.industry || "—",
      location: data.location || "—",
      status: data.status || "Active",
      employee_range: data.employee_range || "—",
      country: data.country || "IN",
      contact: { name: data.contact_name || "—", email: data.contact_email || `${Date.now()}@local` },
      avatar_seed: data.name?.toLowerCase().replace(/\s+/g,"") || ""
    };
    setCompanies(c => [newCompany, ...c]);
    pushToast({ type: "success", title: "Added", message: `${newCompany.name} added` });
  }, []);

  const updateCompany = useCallback((updated) => {
    if (updated.__error) { pushToast({ type: "error", title: "Invalid", message: updated.__error }); return; }
    setCompanies(c => c.map(x => x.id === updated.id ? updated : x));
    pushToast({ type: "success", title: "Updated", message: `${updated.name} updated` });
  }, []);

  const openDelete = (company) => { setDeletingCompany(company); setDeleteOpen(true); };
  const confirmDelete = () => {
    if (!deletingCompany) return;
    setCompanies(c => c.filter(x => x.id !== deletingCompany.id));
    setDeleteOpen(false);
    pushToast({ type: "success", title: "Deleted", message: `${deletingCompany.name} deleted`});
  };

  const confirmBulkDelete = () => {
    const ids = Array.from(selected);
    setCompanies(c => c.filter(x => !ids.includes(x.id)));
    setSelected(new Set());
    setBulkDeleteOpen(false);
    pushToast({ type: "success", title: "Deleted", message: `${ids.length} companies deleted`});
  };

  // filtering + sorting + pagination
  const filtered = useMemo(() => {
    let data = companies;
    if (debouncedSearch) data = data.filter(c => c.name.toLowerCase().includes(debouncedSearch.toLowerCase()));
    if (location) data = data.filter(c => c.location === location);
    if (industry) data = data.filter(c => c.industry === industry);
    data = sortByName(data, sortDirection);
    return data;
  }, [companies, debouncedSearch, location, industry, sortDirection]);

  const pageSize = 6;
  const totalPages = Math.max(1, Math.ceil(filtered.length / pageSize));
  useEffect(()=>{ if (page > totalPages) setPage(totalPages); }, [page, totalPages]);
  const paginated = filtered.slice((page - 1) * pageSize, page * pageSize);

  // drawer
  function onRowClick(c) { setDrawerCompany(c); setDrawerOpen(true); }

  // helper for edit
  function startEdit(company) { setEditingCompany(company); setEditOpen(true); }

  return (
    <div className="flex min-h-screen">
      {/* <Sidebar active={activeNav} setActive={setActiveNav} /> */}

      <div className="flex-1">
        <Header onAdd={() => setAddOpen(true)} />

        <div className="max-w-7xl mx-auto p-4 flex justify-between items-center gap-4">
          <div className="flex gap-2">
            <button onClick={() => setView("table")} className={`px-3 py-1 rounded ${view==='table'?'bg-slate-700':''}`}>Table</button>
            <button onClick={() => setView("board")} className={`px-3 py-1 rounded ${view==='board'?'bg-slate-700':''}`}>Board</button>
          </div>
          <div className="flex items-center gap-3">
            {selected.size > 0 && <button onClick={() => setBulkDeleteOpen(true)} className="px-3 py-1 bg-red-600 rounded text-black">Delete selected ({selected.size})</button>}
            <div className="text-slate-400">{filtered.length} results</div>
          </div>
        </div>

        <Filters
          search={search} setSearch={setSearch}
          location={location} setLocation={setLocation}
          industry={industry} setIndustry={setIndustry}
          locations={locations} industries={industries}
          sortDirection={sortDirection} setSortDirection={setSortDirection}
          onClear={() => { setSearch(""); setLocation(""); setIndustry(""); setSortDirection("asc"); setPage(1); }}
          appliedFilters={[]} removeFilter={()=>{}}
        />

        {ctxLoading && <div className="p-6 text-center text-slate-400">Loading…</div>}
        {ctxError && <div className="p-6 text-center text-rose-400">{ctxError}</div>}

        {!ctxLoading && !ctxError && (
          <>
            <CompaniesTable
              companies={paginated}
              view={view}
              selected={selected}
              setSelected={setSelected}
              onRowClick={onRowClick}
              onEdit={(c)=> startEdit(c)}
              onDelete={(c)=> openDelete(c)}
            />
            <Pagination page={page} setPage={setPage} totalPages={totalPages} />
          </>
        )}
      </div>

      <Drawer open={drawerOpen} company={drawerCompany} onClose={() => setDrawerOpen(false)} onEdit={(c)=>{ setEditingCompany(c); setEditOpen(true); setDrawerOpen(false); }} onDelete={(c)=>{ setDeletingCompany(c); setDeleteOpen(true); setDrawerOpen(false); }} />

      <AddCompanyModal open={addOpen} onClose={()=>setAddOpen(false)} onSave={addCompany} />
      <EditCompanyModal open={editOpen} onClose={()=>setEditOpen(false)} company={editingCompany} onUpdate={updateCompany} />
      <DeleteModal open={deleteOpen} onClose={()=>setDeleteOpen(false)} onConfirm={confirmDelete} name={deletingCompany?.name} />
      <BulkDeleteModal open={bulkDeleteOpen} onClose={()=>setBulkDeleteOpen(false)} onConfirm={confirmBulkDelete} count={selected.size} />

      <Toast toasts={toasts} removeToast={removeToast} />
    </div>
  );
}
