import fs from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const databasePath = path.resolve(__dirname, "../data/clubs.json");

export const findAllClubs = async () => {
  const data = await fs.readFile(databasePath, "utf-8");
  return JSON.parse(data);
};
