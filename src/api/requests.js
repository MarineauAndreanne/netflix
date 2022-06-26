const API_KEY = "e944f97a395ce3cbe5b286feb7face8e"

const requests = {
  fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&language=en-US`,
  fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  fetchActionMovies: `discover/movie?api_key=${API_KEY}&with_genres=28`,
  fetchComedyMovies: `discover/movie?api_key=${API_KEY}&with_genres=35`,
  fetchHorrorMovies: `discover/movie?api_key=${API_KEY}&with_genres=27`,
  fetchRomanceMovies: `discover/movie?api_key=${API_KEY}&with_genres=10749`,
  fetchDocumentaries: `discover/movie?api_key=${API_KEY}&with_genres=99`,
}

export default requests

// 'https://api.themoviedb.org/3/discover/tv?api_key=$e944f97a395ce3cbe5b286feb7face8e&with_networks=213'
// 'https://api.themoviedb.org/3/discover/movie?api_key=e944f97a395ce3cbe5b286feb7face8e&with_genres=35'
