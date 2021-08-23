const numberOfFilms = +prompt("How many films did you already watch?");

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  private: false,
};

const lastFilm = prompt("What is the last movie you watched?");
const lastFilmsRate = prompt("How would you rate it?");

const a = prompt("What is the last movie you watched?"),
  b = prompt("How would you rate it?"),
  c = prompt("What is the last movie you watched?"),
  d = prompt("How would you rate it?");

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;
