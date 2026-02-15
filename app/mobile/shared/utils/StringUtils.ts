

const ignored = ["de", "e", "da", "do", "dos", "das", "a"];

export function formatModuleLabel(name?: string, maxLength = 30) {
  if (!name) return "";

  if (name.length <= maxLength) return name;

  return name
    .split(" ")
    .filter(w => !ignored.includes(w.toLowerCase()))
    .map(w => w.charAt(0).toUpperCase())
    .join("");
}