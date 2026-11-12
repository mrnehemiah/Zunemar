const PREFIX = "zune:";
function storageAvailable() {
  try { const key = `${PREFIX}__test`; localStorage.setItem(key, "1"); localStorage.removeItem(key); return true; }
  catch { return false; }
}
export function getDemo(key, fallback = null) {
  try { if (!storageAvailable()) return fallback; const raw = localStorage.getItem(PREFIX + key); return raw === null ? fallback : JSON.parse(raw); }
  catch { return fallback; }
}
export function setDemo(key, value) {
  if (!storageAvailable()) throw new Error("Hifadhi ya kifaa haipatikani. Washa storage au tumia Supabase.");
  try { localStorage.setItem(PREFIX + key, JSON.stringify(value)); return true; }
  catch { throw new Error("Imeshindikana kuhifadhi taarifa kwenye kifaa."); }
}
export function clearDemo(key) {
  try { if (storageAvailable()) localStorage.removeItem(PREFIX + key); } catch { /* storage may be blocked */ }
}
export function listDemo(key) { const value = getDemo(key, []); return Array.isArray(value) ? value : []; }
export function pushDemo(key, value) { const rows = listDemo(key); rows.unshift(value); setDemo(key, rows); return rows; }
