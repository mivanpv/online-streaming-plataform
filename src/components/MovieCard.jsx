// Descripcion: Componente que renderiza una tarjeta con la información de una película.
// Dependencias: React, react-bootstrap
// Variables:
//    - movie: objeto con la información de la película.
//    - onRent: función que se ejecuta al hacer clic en el botón de alquilar.
//    - onBuy: función que se ejecuta al hacer clic en el botón de comprar.
//    - rentedMovies: array con las películas alquiladas.
//    - boughtMovies: array con las películas compradas
//    - showActions: booleano que indica si se deben mostrar los botones de alquilar y comprar.
// Resultado: Renderiza una tarjeta con la información de la película, incluyendo los botones de alquilar y comprar.
// Ejemplo de uso: <MovieCard movie={movie} onRent={rentMovie} onBuy={buyMovie} rentedMovies={rentedMovies} boughtMovies={boughtMovies} showActions={true} />
// ==============================================================================================

import React from 'react';
import { Card, Button, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import ActionButtons from './ActionButtons';

function MovieCard({ movie, onRent, onBuy, rentedMovies, boughtMovies, showActions = true }) {
  const isRented = rentedMovies.some(m => m.imdbID === movie.imdbID);
  const isBought = boughtMovies.some(m => m.imdbID === movie.imdbID);

  return (
    <Card className="Card" style={{ width: '18rem', margin: '10px' }}>
      <Card.Img className="Card__img" variant="top" src={movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placeholder.com/150'} />
      <Card.Body className="Card__body">
        <Card.Title className="Card__title">{movie.Title}</Card.Title>
        <Card.Text className="Card__text">
          {movie.Year}
          {showActions && (
              <ActionButtons 
              movie={movie} 
              onRent={onRent} 
              onBuy={onBuy} 
              isRented={isRented} 
              isBought={isBought} 
            />
            )}
        </Card.Text>

        <Button variant="primary" as={Link} to={`/trailer/${movie.imdbID}`}>
          Ver Tráiler
        </Button>
        <Button variant="secondary" as={Link} to={`/detalle/${movie.imdbID}`} style={{ marginLeft: '10px' }}>
          Ver Detalle
        </Button>
      </Card.Body>
    </Card>
  );
}

export default MovieCard;