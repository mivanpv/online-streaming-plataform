import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Card, Container } from 'react-bootstrap';

function MovieDetail() {
  const { imdbID } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const fetchMovie = async () => {
      const apiKey = '593d9c0b'; // Reemplaza con tu clave API de OMDb
      const response = await fetch(`https://www.omdbapi.com/?i=${imdbID}&apikey=${apiKey}`);
      const data = await response.json();
      setMovie(data);
    };

    fetchMovie();
  }, [imdbID]);

  return (
    <Container>
      {movie ? (
        <Card>
          <Card.Img variant="top" src={movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placeholder.com/150'} />
          <Card.Body>
            <Card.Title>{movie.Title}</Card.Title>
            <Card.Text>
              <strong>Año:</strong> {movie.Year}
            </Card.Text>
            <Card.Text>
              <strong>Género:</strong> {movie.Genre}
            </Card.Text>
            <Card.Text>
              <strong>Director:</strong> {movie.Director}
            </Card.Text>
            <Card.Text>
              <strong>Actores:</strong> {movie.Actors}
            </Card.Text>
            <Card.Text>
              <strong>Sinopsis:</strong> {movie.Plot}
            </Card.Text>
          </Card.Body>
        </Card>
      ) : (
        <p>Cargando...</p>
      )}
    </Container>
  );
}

export default MovieDetail;