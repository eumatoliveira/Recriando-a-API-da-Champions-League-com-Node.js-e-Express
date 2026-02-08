import * as PlayerRepository from "../repositories/players.repository.js";
import * as HttpResponse from "../utils/http-helper.js";

export const getPlayerService = async () => {
  const data = await PlayerRepository.findAllPlayers();
  let response = null;

  if (data) {
    response = await HttpResponse.ok(data);
  } else {
    response = await HttpResponse.noContent();
  }

  return response;
};

export const getPlayerByIdService = async (id) => {
  const data = await PlayerRepository.findByPlayerId(id);
  let response = null;

  if (data) {
    response = await HttpResponse.ok(data);
  } else {
    response = await HttpResponse.notFound();
  }

  return response;
};

export const createPlayerService = async (player) => {
  let response = null;

  if (Object.keys(player).length !== 0) {
    const data = await PlayerRepository.createPlayer(player);
    response = await HttpResponse.created(data);
  } else {
    response = await HttpResponse.badRequest();
  }

  return response;
};

export const deletePlayerService = async (id) => {
  let response = null;
  const isDeleted = await PlayerRepository.deletePlayer(id);

  if (isDeleted) {
    response = await HttpResponse.ok({ message: "deleted" });
  } else {
    response = await HttpResponse.badRequest();
  }

  return response;
};

export const updatePlayerService = async (id, statistics) => {
  let response = null;
  const data = await PlayerRepository.updatePlayer(id, statistics);

  if (data) {
    response = await HttpResponse.ok(data);
  } else {
    response = await HttpResponse.badRequest();
  }

  return response;
};
