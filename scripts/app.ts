import { moveListComponent } from "./movie-list.component";
import { movieComponent } from "./movie.component";

export const dgMovieAppModule = angular.module("dgMovieApp", []);
dgMovieAppModule.component("movieList", moveListComponent);
dgMovieAppModule.component("movie", movieComponent);

// picker component ( this should look at the movies to see which decades to show)

// request service

// service -> ui mapping

// movie component
// input
// - link: url
// - title:
// - image
// - rating
// - mintues
// - date
