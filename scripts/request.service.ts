import { VerboseUiMovieModel } from "./models/ui-movie.model";
import { BaseUiMovieModel } from "./models/ui-base-movie-list.model";

const BASE_URL = "http://www.omdbapi.com/?apikey=9e2fb798&";

const mockData = [
  {
    Title: "Batman Begins",
    Year: "2005",
    imdbID: "tt0372784",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BZmUwNGU2ZmItMmRiNC00MjhlLTg5YWUtODMyNzkxODYzMmZlXkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_SX300.jpg"
  },
  {
    Title: "Batman v Superman: Dawn of Justice",
    Year: "2016",
    imdbID: "tt2975590",
    Type: "movie",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BYThjYzcyYzItNTVjNy00NDk0LTgwMWQtYjMwNmNlNWJhMzMyXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"
  }
];

const mockMovieByID = [
  {
    Title: "Batman Begins",
    Year: "2005",
    Rated: "PG-13",
    Released: "15 Jun 2005",
    Runtime: "140 min",
    Genre: "Action, Adventure",
    Director: "Christopher Nolan",
    Writer:
      "Bob Kane (characters), David S. Goyer (story), Christopher Nolan (screenplay), David S. Goyer (screenplay)",
    Actors: "Christian Bale, Michael Caine, Liam Neeson, Katie Holmes",
    Plot:
      "After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from corruption.",
    Language: "English, Urdu, Mandarin",
    Country: "USA, UK",
    Awards: "Nominated for 1 Oscar. Another 14 wins & 72 nominations.",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BZmUwNGU2ZmItMmRiNC00MjhlLTg5YWUtODMyNzkxODYzMmZlXkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_SX300.jpg",
    Ratings: [
      {
        Source: "Internet Movie Database",
        Value: "8.2/10"
      },
      {
        Source: "Rotten Tomatoes",
        Value: "84%"
      },
      {
        Source: "Metacritic",
        Value: "70/100"
      }
    ],
    Metascore: "70",
    imdbRating: "8.2",
    imdbVotes: "1,212,892",
    imdbID: "tt0372784",
    Type: "movie",
    DVD: "18 Oct 2005",
    BoxOffice: "$204,100,000",
    Production: "Warner Bros. Pictures",
    Website: "N/A",
    Response: "True"
  },
  {
    Title: "Batman v Superman: Dawn of Justice",
    Year: "2016",
    Rated: "PG-13",
    Released: "25 Mar 2016",
    Runtime: "151 min",
    Genre: "Action, Adventure, Sci-Fi",
    Director: "Zack Snyder",
    Writer:
      "Chris Terrio, David S. Goyer, Bob Kane (Batman created by), Bill Finger (Batman created by), Jerry Siegel (Superman created by), Joe Shuster (Superman created by), William Moulton Marston (character created by: Wonder Woman)",
    Actors: "Ben Affleck, Henry Cavill, Amy Adams, Jesse Eisenberg",
    Plot:
      "Fearing that the actions of Superman are left unchecked, Batman takes on the Man of Steel, while the world wrestles with what kind of a hero it really needs.",
    Language: "English",
    Country: "USA",
    Awards: "14 wins & 30 nominations.",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BYThjYzcyYzItNTVjNy00NDk0LTgwMWQtYjMwNmNlNWJhMzMyXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
    Ratings: [
      {
        Source: "Internet Movie Database",
        Value: "6.5/10"
      },
      {
        Source: "Rotten Tomatoes",
        Value: "28%"
      },
      {
        Source: "Metacritic",
        Value: "44/100"
      }
    ],
    Metascore: "44",
    imdbRating: "6.5",
    imdbVotes: "585,766",
    imdbID: "tt2975590",
    Type: "movie",
    DVD: "19 Jul 2016",
    BoxOffice: "$293,792,936",
    Production: "Warner Bros. Pictures",
    Website: "http://www.facebook.com/batmanvsuperman",
    Response: "True"
  }
];

export const getAllMovies = () => {
  // const ALL_BATMAN_URL = `${BASE_URL}s=Batman`;

  return Promise.resolve(mockData).then(movies => {
    return movies.map(_movie => {
      return new BaseUiMovieModel(_movie);
    });
  });
};

export const getMovieById = (id: string) => {
  if (!id) {
    console.warn("Id is missing");
    return;
  }

  //const BATMAN_BY_ID_URL = `${BASE_URL}i=${id}`;
  const movie = mockMovieByID.find(md => md.imdbID === id);
  console.log(id, movie);
  return Promise.resolve(new VerboseUiMovieModel(movie));
};
