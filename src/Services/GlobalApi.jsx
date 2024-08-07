import axios from "axios";

// const movieBaseUrl = "https://api.themoviedb.org/3/";
// const api_key = "d3e8c1a2d387230baac599f0d7c2edfe";

const movieBaseUrl = "https://api.themoviedb.org/3";
const api_key = "d3e8c1a2d387230baac599f0d7c2edfe";
// const getTrendingVideos = axios.get(
//   movieBaseUrl + "/trending/all/day?api_key=" + api_key
// );
const movieByGenreBaseURL =
  "https://api.themoviedb.org/3/discover/movie?api_key=d3e8c1a2d387230baac599f0d7c2edfe";

const getTrendingVideos = axios.get(
  movieBaseUrl + "/trending/all/day?api_key=" + api_key
);

const getMovieByGenreId = (id) =>
  axios.get(movieByGenreBaseURL + "&with_genres=" + id);

export default {
  getTrendingVideos,
  getMovieByGenreId,
};
