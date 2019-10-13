import { getMovieById } from "./request.service";
import { VerboseUiMovieModel } from "./models/ui-movie.model";
// import images from "../content/images/*"; // https://github.com/parcel-bundler/parcel/issues/317

class MovieController {
  public static readonly $inject = ["$scope", "$window"];
  protected movieData: VerboseUiMovieModel;
  private $scope;
  private $window;
  constructor($scope, $window) {
    this.$scope = $scope;
    this.$window = $window;
  }
  public $onInit() {
    // TODO show a loading icon?
  }

  public $onChanges(changes) {
    if (changes && changes.movieId && changes.movieId.currentValue) {
      // TODO complete this check
      getMovieById(changes.movieId.currentValue).then(movie => {
        this.$scope.$applyAsync(() => (this.movieData = movie));
      });
    }
  }

  public openLink(link: string) {
    if (!link) return;

    this.$window.open(link, "_blank");
  }
}
export const movieComponent = {
  bindings: {
    movieId: "<"
  },
  controller: MovieController,
  template: `
    <div class="movie" ng-if="$ctrl.movieData">
      <img class="movie__image" ng-src="{{$ctrl.movieData.posterUrl}}"/>
      <div class="movie__overview-container">
        <h2 class="movie__title">{{$ctrl.movieData.title}}</h2>
        <div class="movie__details">
          <div class="movie__rated">{{$ctrl.movieData.rated}}</div>
          <div class="movie__runtime">{{$ctrl.movieData.runtime}}</div>
          <div class="movie__released">{{$ctrl.movieData.released}}</div>
        </div>
        <div class="movie__plot">{{$ctrl.movieData.plot}}</div>
        <button class="movie__external-button"ng-click="$ctrl.openLink($ctrl.movieData.externalLink)">View on IMDB</button>
      </div>
    </div>
  `
};
