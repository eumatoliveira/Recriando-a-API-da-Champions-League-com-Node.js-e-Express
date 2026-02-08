import fs from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const databasePath = path.resolve(__dirname, "../data/database.json");

export const findAllPlayers = async () => {
  const data = await fs.readFile(databasePath, "utf-8");
  return JSON.parse(data);
};

export const findByPlayerId = async (id) => {
  const players = await findAllPlayers();
  return players.find((player) => player.id === id);
};

export const createPlayer = async (player) => {
  const players = await findAllPlayers();
  players.push(player);
  await fs.writeFile(databasePath, JSON.stringify(players, null, 2));
  return player;
};

export const deletePlayer = async (id) => {
  const players = await findAllPlayers();
  const index = players.findIndex((player) => player.id === id);

  if (index !== -1) {
    players.splice(index, 1);
    await fs.writeFile(databasePath, JSON.stringify(players, null, 2));
    return true;
  }

  return false;
};

export const updatePlayer = async (id, statistics) => {
  const players = await findAllPlayers();
  const playerIndex = players.findIndex((player) => player.id === id);

  if (playerIndex !== -1) {
    players[playerIndex] = { ...players[playerIndex], ...statistics };
    await fs.writeFile(databasePath, JSON.stringify(players, null, 2));
    return players[playerIndex];
  }

  return null;
};
