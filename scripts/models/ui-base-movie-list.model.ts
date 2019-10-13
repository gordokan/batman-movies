const URL_TO_STRIP = "https://m.media-amazon.com/images/M/";
import images from "../../content/images/*.jpg"; // https://github.com/parcel-bundler/parcel/issues/317

export class BaseUiMovieModel {
  title: string;
  year: string;
  id: string;
  posterUrl: string;
  _decade: number; // for easy filtering

  constructor(baseApiMovieModel) {
    this.title = baseApiMovieModel.Title;
    this.year = baseApiMovieModel.Year;
    this.id = baseApiMovieModel.imdbID;
    this.posterUrl = this.getImageUrl(baseApiMovieModel.Poster);
    this._decade = this.setDecade(this.year);
  }

  private setDecade(val: string) {
    if (val.indexOf("–") !== -1) {
      // 1992–1995 edge case
      val = val.split("–")[0];
    }

    let decade = parseInt(`${val.slice(0, val.length - 1)}0`);

    if (decade && decade !== NaN) {
      return decade;
    }
  }

  /** Get local image url */
  private getImageUrl(val: string) {
    const fileName = val.substring(URL_TO_STRIP.length);
    return images[`${fileName.substring(0, fileName.length - 4)}`];
  }
}
