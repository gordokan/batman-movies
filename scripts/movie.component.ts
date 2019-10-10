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
          <div class="movie-details-rating">{{$ctrl.movieData.rating}}</div>
          <div class="movie-details-runTime">{{$ctrl.movieData.runTime}}</div>
          <div class="movie-details-released">{{$ctrl.movieData.released}}</div>
        </div>
        <div class="movie-plot">{{$ctrl.movieData.plot}}</div>
      </div>
      <a href="{{$ctrl.movieData.externalLink}}" target="_blank">View on IMDB</a>
    </div>
  `
};
