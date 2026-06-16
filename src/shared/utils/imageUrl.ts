const API_BASE = (
  import.meta.env.VITE_API_URL || "http://127.0.0.1:3001/api"
).replace(/\/api$/, "");

export function getImageUrl(path: string): string {
  if (!path) return "";
  if (path.startsWith("http://") || path.startsWith("https://")) return path;
  return `${API_BASE}/${path.replace(/^\//, "")}`;
}
