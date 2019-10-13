import { getAllMovies } from "./request.service";
import { BaseUiMovieModel } from "./models/ui-base-movie-list.model";

class MovieListController {
  public static readonly $inject = ["$scope"];
  public $scope;
  public movies: BaseUiMovieModel[];
  public decadeFilter: { _decade: number };
  constructor($scope) {
    this.$scope = $scope;
    this.movies = []; // intial movie list
  }

  public $onInit() {
    getAllMovies()
      .then(movies => {
        this.$scope.$applyAsync(() => (this.movies = movies)); // TODO can this be avoided?
      })
      .catch(e => {
        console.error("Error getting movies", e);
        alert(
          "There was an error retrieving the movie list, please try again later!"
        );
      });
  }

  public onFilterUpdated({ filterVal }) {
    // refresh movie list locally
    console.log(filterVal);
    this.decadeFilter = {
      _decade: filterVal
    };
  }
}

export const moveListComponent = {
  bindings: {},
  template: `
    <div class="movie-container">
      <filter on-updated="$ctrl.onFilterUpdated($event)"></filter>
      <movie ng-repeat="movie in $ctrl.movies | filter: $ctrl.decadeFilter" movie-id="movie.id">
      </movie>
    </div>
  `,
  controller: MovieListController
};
