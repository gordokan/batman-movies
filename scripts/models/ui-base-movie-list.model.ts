export class BaseUiMovieModel {
  title: string;
  year: string;
  id: string;
  posterUrl: string;

  constructor(baseApiMovieModel) {
    this.title = baseApiMovieModel.Title;
    this.year = baseApiMovieModel.Year;
    this.id = baseApiMovieModel.imdbID;
    this.posterUrl = ""; // TODO
  }
}
