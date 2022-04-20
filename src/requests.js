// Generate api key from themoviedb.org
const APIKEY = "<apiKey>";

const requests = {
  fetchTrending: `/trending/all/week?api_key=${APIKEY}&language=english`,
  fetchNetflixOriginals: `/discover/tv?api_key=${APIKEY}&with_genres=18`,
  fetchTopRated: `/movie/top_rated?api_key=${APIKEY}&language=english`,
  fetchActionMovies: `/discover/movie?api_key=${APIKEY}&with_genres=28`,
  fetchComedyMovies: `/discover/movie?api_key=${APIKEY}&with_genres=35`,
  fetchHorrorMovies: `/discover/movie?api_key=${APIKEY}&with_genres=10749`,
  fetchRomanceMovies: `/discover/movie?api_key=${APIKEY}&with_genres=16`,
  fetchDocumentaries: `/discover/movie?api_key=${APIKEY}&with_genres=99`,
};

export default requests;
