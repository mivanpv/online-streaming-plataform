import React from 'react';
import { Card, Button, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaDollarSign, FaRegCalendarAlt } from 'react-icons/fa';

function MovieCard({ movie, onRent, onBuy, showActions = true }) {
  return (
    <Card style={{ width: '18rem', margin: '10px' }}>
      <Card.Img variant="top" src={movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placeholder.com/150'} />
      <Card.Body>
        <Card.Title>{movie.Title}</Card.Title>
        <Card.Text>
          {movie.Year}
          {showActions && (
              <>
                <FaRegCalendarAlt 
                  style={{ cursor: 'pointer', marginRight: '10px' }} 
                  onClick={() => onRent(movie)} 
                  title="Alquilar"
                />
                <FaDollarSign 
                  style={{ cursor: 'pointer' }} 
                  onClick={() => onBuy(movie)} 
                  title="Comprar"
                />
              </>
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