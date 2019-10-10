import { getMovieById } from "./request.service";
import { UiMovieModel } from "./models/ui-movie.model";

class controller {
  public static readonly $inject = ["$scope"];
  protected movieData: UiMovieModel;
  private $scope;
  constructor($scope) {
    this.$scope = $scope;
  }
  $onInit() {
    // TODO show a loading icon?
  }

  $onChanges(changes) {
    if (changes && changes.movieId && changes.movieId.currentValue) {
      // TODO complete this check
      getMovieById(changes.movieId.currentValue).then(movie => {
        this.$scope.$applyAsync(() => (this.movieData = movie));
      });
    }
  }
}
export const movieComponent = {
  bindings: {
    movieId: "<"
  },
  controller,
  template: `
    <div class="movie" ng-if="$ctrl.movieData">
      <img class="movie-image" ng-src=""/>
      <div class="movie-details-container">
        <h3>{{$ctrl.movieData.title}}</h3>
        <div class="movie-details">
        </div>
        <div class="movie-description">{{$ctrl.movieData.description}}</div>
      </div>
      <a href='' target="_blank">View on IMDB</a>
    </div>
  `
};
