import axios from "axios";

const movieBaseUrl = "https://api.themoviedb.org/3";
const api_key = "5d78ed64237414a6aafcbdb053b772a0";
const movieByGenreBaseUrl =
  "https://api.themoviedb.org/3/discover/movie?api_key=5d78ed64237414a6aafcbdb053b772a0";
//https://api.themoviedb.org/3/movie/popular?api_key=5d78ed64237414a6aafcbdb053b772a0
//console.log(movieBaseUrl + "/movie/popular?api_key=" + api_key);

const getTrendingVideos = axios.get(
  movieBaseUrl + "/movie/popular?api_key=" + api_key
);

/*
const getMovieByGenreId = (id) => {
  axios.get(movieByGenreBaseUrl + "&with_genres=" + id);
};*/

async function getMovieByGenreId(id) {
  return await axios.get(movieByGenreBaseUrl + "&with_genres=" + id);
}

async function getMovieDetails(id) {
  return await axios.get(
    movieBaseUrl + "/movie/" + id + "?api_key=5d78ed64237414a6aafcbdb053b772a0"
  );
}

async function getSimilarMovies(id) {
  return await axios.get(
    movieBaseUrl +
      "/movie/" +
      id +
      "/similar?api_key=5d78ed64237414a6aafcbdb053b772a0"
  );
}

async function getRecommendedMovies(id) {
  return await axios.get(
    movieBaseUrl +
      "/movie/" +
      id +
      "/recommendations?api_key=5d78ed64237414a6aafcbdb053b772a0"
  );
}

export default {
  getTrendingVideos,
  getMovieByGenreId,
  getMovieDetails,
  getSimilarMovies,
  getRecommendedMovies,
};
