// Descripción: Componente que renderiza el carrito de compras con las películas alquiladas y compradas.
// Dependencias: React, react-bootstrap
// Variables:
//    - rentedMovies: array con las películas alquiladas.
//    - boughtMovies: array con las películas compradas
//    - removeRentedMovie: función para eliminar una película alquilada.
//    - removeBoughtMovie: función para eliminar una película comprada.
//    - rentMovie: función para alquilar una película.
//    - buyMovie: función para comprar una película.
// Resultado: Renderiza las películas alquiladas y compradas con la opción de eliminarlas.
// ==============================================================================================
// Ejemplo de uso: <ShoppingCart />
// ==============================================================================================

import React, { useContext } from 'react';
import { ShoppingCartContext } from '../context/ShoppingCartProvider';
import { Row, Col, Button } from 'react-bootstrap';
import MovieCard from './MovieCard';

function ShoppingCart() {
  const { rentedMovies, boughtMovies, removeRentedMovie, removeBoughtMovie, rentMovie, buyMovie  } = useContext(ShoppingCartContext);

  return (
    <div>
      <h2>Carrito de Compras</h2>
      <h3>Películas Alquiladas</h3>
      <Row>
        {rentedMovies.length > 0 ? (
          rentedMovies.map((movie) => (
            <Col key={movie.imdbID} md={3}>
              <MovieCard 
                movie={movie} 
                onRent={rentMovie} 
                onBuy={buyMovie} 
                showActions={true} 
                rentedMovies={rentedMovies} 
                boughtMovies={boughtMovies} 
              />
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
              <MovieCard 
                movie={movie} 
                onRent={rentMovie} 
                onBuy={buyMovie} 
                showActions={true} 
                rentedMovies={rentedMovies} 
                boughtMovies={boughtMovies} 
              />
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