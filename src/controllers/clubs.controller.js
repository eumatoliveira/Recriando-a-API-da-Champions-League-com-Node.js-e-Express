import * as ClubService from "../services/clubs.service.js";

export const getClubs = async (req, res) => {
  const httpResponse = await ClubService.getClubsService();
  res.status(httpResponse.statusCode).json(httpResponse.body);
};
