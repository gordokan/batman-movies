import { moveListComponent } from "./movie-list.component";
import { movieComponent } from "./movie.component";
import "./../content/styles/scss/main";
import { filterComponent } from "./filter.component";

declare var angular;
const dgMovieAppModule = angular.module("dgMovieApp", []);
dgMovieAppModule.component("movieList", moveListComponent);
dgMovieAppModule.component("movie", movieComponent);
dgMovieAppModule.component("filter", filterComponent);
