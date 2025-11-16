const API = import.meta.env.VITE_API_BASE || "http://localhost:8000";

export async function login(username, password) {
  const res = await fetch(`${API}/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, password })
  });
  if (!res.ok) throw new Error("Invalid credentials");
  return res.json();
}

export async function getStats(token) {
  const res = await fetch(`${API}/dashboard/stats`, {
    headers: { "Authorization": `Bearer ${token}` }
  });
  if (!res.ok) throw new Error("Stats fetch failed");
  return res.json();
}
