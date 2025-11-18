export async function fetchCompanies() {
  // fetch from public/companies.json (mock API)
  const res = await fetch('/companies.json')
  if (!res.ok) {
    throw new Error('Failed to fetch companies')
  }
  const data = await res.json()
  // simulate slight delay for demo purposes
  await new Promise(r => setTimeout(r, 300))
  return data
}
