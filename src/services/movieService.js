// Este archivo contiene funciones para obtener datos de películas de TMDb y OMDb
// y para buscar películas por título en OMDb.
// Las funciones fetchPopularMovies, fetchMovieDetails y fetchMovieTrailer se utilizan
// para obtener información sobre películas populares, detalles de películas y tráilers de películas, respectivamente.
// La función searchMovies se utiliza para buscar películas por título.
// Las claves de API de TMDb, OMDb y YouTube se almacenan en variables de entorno.
// Para obtener una clave de API de TMDb, regístrate en https://www.themoviedb.org/.
// Para obtener una clave de API de OMDb, regístrate en http://www.omdbapi.com/.
// Para obtener una clave de API de YouTube, sigue las instrucciones en https://developers.google.com/youtube/v3/getting-started.

// Variables de entorno
const tmdbApiKey = process.env.REACT_APP_TMDB_API_KEY; // Reemplaza con tu clave API de TMDb
const omdbApiKey = process.env.REACT_APP_OMDB_API_KEY; // Reemplaza con tu clave API de OMDb
const youtubeApiKey = process.env.REACT_APP_YOUTUBE_API_KEY; // Reemplaza con tu clave API de YouTube

export const fetchPopularMovies = async () => {
  // Obtener películas populares de TMDb
  const tmdbResponse = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${tmdbApiKey}&language=es-ES&page=1`);
  const tmdbData = await tmdbResponse.json();
  const tmdbMovies = tmdbData.results;

  // Obtener detalles de las películas de OMDb
  let movies = [];
  for (const tmdbMovie of tmdbMovies) {
    const omdbResponse = await fetch(`https://www.omdbapi.com/?t=${tmdbMovie.title}&apikey=${omdbApiKey}`);
    const omdbData = await omdbResponse.json();
    if (omdbData.Response === 'True') {
      movies.push(omdbData);
    }
  }

  return movies;
};

export const fetchMovieDetails = async (imdbID) => {
  const response = await fetch(`https://www.omdbapi.com/?i=${imdbID}&apikey=${omdbApiKey}`);
  const data = await response.json();
  return data;
};

export const fetchMovieTrailer = async (imdbID) => {
  const response = await fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&q=${imdbID}+trailer&type=video&key=${youtubeApiKey}`);
  const data = await response.json();
  if (data.items && data.items.length > 0) {
    return `https://www.youtube.com/embed/${data.items[0].id.videoId}`;
  }
  return null;
};

export const searchMovies = async (query) => {
  const response = await fetch(`https://www.omdbapi.com/?s=${encodeURIComponent(query)}&apikey=${omdbApiKey}`);
  const data = await response.json();
  return data.Search || [];
};