import { getAllMovies } from "./request.service";

class MovieListController {
  public static readonly $inject = ["$scope"];
  public $scope;
  public movies;
  constructor($scope) {
    this.$scope = $scope;
    this.movies = []; // intial movie list
  }

  $onInit() {
    getAllMovies()
      .then(movies => {
        console.log(movies);
        this.$scope.$applyAsync(() => (this.movies = movies)); // TODO can this be avoided?
      })
      .catch(e => {
        console.error("Error getting movies", e);
        alert(
          "There was an error retrieving the movie list, please try again later!"
        );
      });
  }

  onFilterUpdated() {
    // refresh movie list locally
  }
}

export const moveListComponent = {
  bindings: {},
  template: `
    <div class="movie-container">
      <filter on-updated="$ctrl.onFilterUpdated()"></filter>
      <movie ng-repeat="movie in $ctrl.movies" movie-id="movie.id">
      </movie>
    </div>
  `,
  controller: MovieListController
};
