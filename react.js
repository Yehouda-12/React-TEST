
import { readFile, writeFile } from "fs/promises";
import path from "path";

const filePath = path.resolve("data/complaints.csv");

const HEADERS = ["id", "category", "message", "createdAt"];

/* =========================
   READ ALL
========================= */
export async function getAll() {
  try {
    const data = await readFile(filePath, "utf-8");

    const lines = data.trim().split("\n");

    if (lines.length <= 1) return [];

    return lines.slice(1).map(line => {
      const values = line.split(",");
      let obj = {};

      HEADERS.forEach((header, index) => {
        obj[header] = values[index];
      });

      return obj;
    });

  } catch (error) {
    return [];
  }
}

/* =========================
   READ ONE BY ID
========================= */
export async function getById(id) {
  const complaints = await getAll();
  return complaints.find(c => c.id === id);
}

/* =========================
   CREATE
========================= */
export async function create(category, message) {
  const complaints = await getAll();

  const newComplaint = {
    id: Date.now().toString(),
    category,
    message,
    createdAt: new Date().toISOString()
  };

  complaints.push(newComplaint);

  await saveAll(complaints);

  return newComplaint;
}

/* =========================
   UPDATE
========================= */
export async function update(id, newData) {
  const complaints = await getAll();

  const index = complaints.findIndex(c => c.id === id);

  if (index === -1) return null;

  complaints[index] = {
    ...complaints[index],
    ...newData
  };

  await saveAll(complaints);

  return complaints[index];
}

/* =========================
   DELETE
========================= */
export async function remove(id) {
  const complaints = await getAll();

  const filtered = complaints.filter(c => c.id !== id);

  if (filtered.length === complaints.length) return false;

  await saveAll(filtered);

  return true;
}

/* =========================
   INTERNAL SAVE FUNCTION
========================= */
async function saveAll(complaints) {
  const headerLine = HEADERS.join(",") + "\n";

  const rows = complaints.map(c =>
    `${c.id},${c.category},${c.message},${c.createdAt}`
  ).join("\n");

  await writeFile(filePath, headerLine + rows);
} 
