import { getAllMovies } from "./request.service";
import { BaseUiMovieModel } from "./models/ui-base-movie-list.model";

class MovieListController {
  public static readonly $inject = ["$scope"];
  public $scope;
  public movies: BaseUiMovieModel[];
  public decadeFilter: number;
  constructor($scope) {
    this.$scope = $scope;
    this.movies = []; // intial movie list
  }

  public $onInit() {
    getAllMovies()
      .then(movies => {
        this.$scope.$applyAsync(() => (this.movies = movies));
      })
      .catch(e => {
        console.error("Error getting movies", e);
        alert(
          "There was an error retrieving the movie list, please try again later!"
        );
      });
  }

  public onFilterUpdated({ filterVal }) {
    this.decadeFilter = filterVal;
  }
}

export const moveListComponent = {
  bindings: {},
  template: `
    <filter on-updated="$ctrl.onFilterUpdated($event)"></filter>
    <div>
      <movie ng-repeat="movie in $ctrl.movies"
             ng-show="([movie._decade] | filter:$ctrl.decadeFilter).length"
             movie-id="movie.id">
      </movie>
    </div>
  `,
  controller: MovieListController
};
