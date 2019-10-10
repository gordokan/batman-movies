import { BaseUiMovieModel } from "./ui-base-movie-list.model";

export class VerboseUiMovieModel extends BaseUiMovieModel {
  public rated: string;
  public released: string;
  public runtime: string;
  public plot: string;
  public externalLink: string;

  constructor(apiMovieData) {
    super(apiMovieData);
    this.rated = apiMovieData.Rated;
    this.released = apiMovieData.Released;
    this.runtime = apiMovieData.Runtime;
    this.plot = apiMovieData.Plot;
    this.externalLink = `https://www.imdb.com/title/${apiMovieData.imdbID}/`;
  }
}
