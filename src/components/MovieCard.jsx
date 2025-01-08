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