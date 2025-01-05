import React from 'react';
import { Card } from 'react-bootstrap';

function MovieCard({ movie }) {
  return (
    <Card style={{ width: '18rem', margin: '10px' }}>
      <Card.Img variant="top" src={movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placeholder.com/150'} />
      <Card.Body>
        <Card.Title>{movie.Title}</Card.Title>
        <Card.Text>
          {movie.Year}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default MovieCard;