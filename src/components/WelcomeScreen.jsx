import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import MovieCard from './MovieCard';

function WelcomeScreen() {
  const [popularMovies, setPopularMovies] = useState([]);

  useEffect(() => {
    const fetchPopularMovies = async () => {
      const tmdbApiKey = '724d0a596d2af77b4e2d7574d600067c'; // Reemplaza con tu clave API de TMDb
      const omdbApiKey = '593d9c0b'; // Reemplaza con tu clave API de OMDb

      // Obtener películas populares de TMDb
      const tmdbResponse = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${tmdbApiKey}&page=1`);
      const tmdbData = await tmdbResponse.json();
      const tmdbMovies = tmdbData.results;
      
      // Obtener detalles de las películas de OMDb
      let movies = [];
      for (const tmdbMovie of tmdbMovies) {
        const omdbResponse = await fetch(`https://www.omdbapi.com/?t=${tmdbMovie.original_title}&apikey=${omdbApiKey}`);
        const omdbData = await omdbResponse.json();
        if (omdbData.Response === 'True') {
          movies.push(omdbData);
          console.log(omdbData);
        }
      }

      setPopularMovies(movies);
    };

    fetchPopularMovies();
  }, []);

  return (
    <div>
      <h2>Películas Populares</h2>
      <Row>
        {popularMovies.length > 0 ? (
          popularMovies.map((movie) => (
            <MovieCard key={movie.imdbID} movie={movie} />
          ))
        ) : (
          <p>Cargando películas populares...</p>
        )}
      </Row>
    </div>
  );
}

export default WelcomeScreen;