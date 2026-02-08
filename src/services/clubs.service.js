import * as ClubRepository from "../repositories/clubs.repository.js";
import * as HttpResponse from "../utils/http-helper.js";

export const getClubsService = async () => {
  const data = await ClubRepository.findAllClubs();
  let response = null;

  if (data) {
    response = await HttpResponse.ok(data);
  } else {
    response = await HttpResponse.noContent();
  }

  return response;
};
