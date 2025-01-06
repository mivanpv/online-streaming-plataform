import React, { useContext } from 'react';
import { ShoppingCartContext } from '../context/ShoppingCartProvider';
import { Row, Col, Button } from 'react-bootstrap';
import MovieCard from './MovieCard';

function ShoppingCart() {
  const { rentedMovies, boughtMovies, removeRentedMovie, removeBoughtMovie } = useContext(ShoppingCartContext);

  return (
    <div>
      <h2>Carrito de Compras</h2>
      <h3>Películas Alquiladas</h3>
      <Row>
        {rentedMovies.length > 0 ? (
          rentedMovies.map((movie) => (
            <Col key={movie.imdbID} md={4}>
              <MovieCard movie={movie} showActions={false} />
              <Button variant="danger" onClick={() => removeRentedMovie(movie.imdbID)}>Eliminar</Button>
            </Col>
          ))
        ) : (
          <p>No hay películas alquiladas.</p>
        )}
      </Row>
      <h3>Películas Compradas</h3>
      <Row>
        {boughtMovies.length > 0 ? (
          boughtMovies.map((movie) => (
            <Col key={movie.imdbID} md={4}>
              <MovieCard movie={movie} showActions={false} />
              <Button variant="danger" onClick={() => removeBoughtMovie(movie.imdbID)}>Eliminar</Button>
            </Col>
          ))
        ) : (
          <p>No hay películas compradas.</p>
        )}
      </Row>
    </div>
  );
}

export default ShoppingCart;