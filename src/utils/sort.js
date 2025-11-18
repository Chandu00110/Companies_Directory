export function sortByName(arr, direction = "asc") {
  return [...arr].sort((a,b) => {
    const A = (a.name||"").toString().toLowerCase();
    const B = (b.name||"").toString().toLowerCase();
    if (A < B) return direction === "asc" ? -1 : 1;
    if (A > B) return direction === "asc" ? 1 : -1;
    return 0;
  });
}
