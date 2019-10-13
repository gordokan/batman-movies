import { VerboseUiMovieModel } from "./models/ui-movie.model";
import { BaseUiMovieModel } from "./models/ui-base-movie-list.model";

const BASE_URL = "http://www.omdbapi.com/?apikey=9e2fb798&";

export const getAllMovies = () => {
  const ALL_BATMAN_URL = `${BASE_URL}s=Batman`;

  return fetch(ALL_BATMAN_URL)
    .then(data => data.json())
    .then(results => {
      return results.Search.map(_movie => {
        return new BaseUiMovieModel(_movie);
      });
    });
};

export const getMovieById = (id: string) => {
  if (!id) {
    console.warn("Id is missing");
    return;
  }

  const BATMAN_BY_ID_URL = `${BASE_URL}i=${id}`;
  return fetch(BATMAN_BY_ID_URL)
    .then(data => data.json())
    .then(results => new VerboseUiMovieModel(results));
};
