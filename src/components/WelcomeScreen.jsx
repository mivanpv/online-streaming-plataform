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