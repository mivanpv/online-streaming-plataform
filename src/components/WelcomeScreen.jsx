import React, { useEffect, useState, useContext } from 'react';
import { Row, Col } from 'react-bootstrap';
import MovieCard from './MovieCard';
import { ShoppingCartContext } from '../context/ShoppingCartProvider';

function WelcomeScreen() {
  const [popularMovies, setPopularMovies] = useState([]);
  const { rentedMovies, boughtMovies, rentMovie, buyMovie } = useContext(ShoppingCartContext);

  useEffect(() => {
    const fetchPopularMovies = async () => {
      const tmdbApiKey = process.env.REACT_APP_TMDB_API_KEY; // Reemplaza con tu clave API de TMDb
      const omdbApiKey = process.env.REACT_APP_OMDB_API_KEY; // Reemplaza con tu clave API de OMDb

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
            <Col key={movie.imdbID} md={4}>
              <MovieCard 
                movie={movie} 
                onRent={rentMovie} 
                onBuy={buyMovie} 
                rentedMovies={rentedMovies} 
                boughtMovies={boughtMovies} 
              />
            </Col>
          ))
        ) : (
          <p>Cargando películas populares...</p>
        )}
      </Row>
    </div>
  );
}

export default WelcomeScreen;