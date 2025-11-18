import React, { useState, useEffect } from 'react'

export default function DarkToggle() {
  const [dark, setDark] = useState(
    () => localStorage.getItem("theme") !== "light"
  );

  useEffect(() => {
    const root = document.documentElement;
    if (dark) {
      root.classList.remove("light");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.add("light");
      localStorage.setItem("theme", "light");
    }
  }, [dark]);

  return (
    <button
      onClick={() => setDark((d) => !d)}
      className="px-3 py-1 border rounded bg-slate-800/70"
    >
      {dark ? "Dark" : "Light"}
    </button>
  );
}
