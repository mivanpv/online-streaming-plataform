// Descripción: Este componente se encarga de mostrar las películas populares y de permitir alquilar o comprar una película.
// Dependencias: React, react-bootstrap, context/ShoppingCartProvider, services/movieService
// Variables:
//    - popularMovies: array con las películas populares.
// Resultado: Renderiza las películas populares con la opción de alquilar o comprar una película.
// ==============================================================================================
// Ejemplo de uso: <WelcomeScreen />
// ==============================================================================================

// Hooks utilizados: useEffect, useState, useContext

import React, { useEffect, useState, useContext } from 'react';
import { Row, Col } from 'react-bootstrap';
import MovieCard from './MovieCard';
import { ShoppingCartContext } from '../context/ShoppingCartProvider';
import { fetchPopularMovies } from '../services/movieService';

function WelcomeScreen() {
  const [popularMovies, setPopularMovies] = useState([]);
  const { rentedMovies, boughtMovies, rentMovie, buyMovie } = useContext(ShoppingCartContext);

  useEffect(() => {
    const getPopularMovies = async () => {
      const movies = await fetchPopularMovies();
      setPopularMovies(movies);
    };

    getPopularMovies();
  }, []);
  
  return (
    <div>
      <h2>Películas Populares</h2>
      <Row>
        {popularMovies.length > 0 ? (
          popularMovies.map((movie) => (
            <Col key={movie.imdbID} md={3}>
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