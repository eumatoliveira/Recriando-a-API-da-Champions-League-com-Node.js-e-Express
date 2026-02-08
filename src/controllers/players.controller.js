import * as PlayerService from "../services/players.service.js";

export const getPlayer = async (req, res) => {
  const httpResponse = await PlayerService.getPlayerService();
  res.status(httpResponse.statusCode).json(httpResponse.body);
};

export const getPlayerById = async (req, res) => {
  const id = parseInt(req.params.id);
  const httpResponse = await PlayerService.getPlayerByIdService(id);
  res.status(httpResponse.statusCode).json(httpResponse.body);
};

export const postPlayer = async (req, res) => {
  const bodyValue = req.body;
  const httpResponse = await PlayerService.createPlayerService(bodyValue);

  if (httpResponse) {
    res.status(httpResponse.statusCode).json(httpResponse.body);
  }
};

export const deletePlayer = async (req, res) => {
  const id = parseInt(req.params.id);
  const httpResponse = await PlayerService.deletePlayerService(id);
  res.status(httpResponse.statusCode).json(httpResponse.body);
};

export const updatePlayer = async (req, res) => {
  const id = parseInt(req.params.id);
  const bodyValue = req.body;
  const httpResponse = await PlayerService.updatePlayerService(id, bodyValue);
  res.status(httpResponse.statusCode).json(httpResponse.body);
};
