// Descripcion: Componente que renderiza el tráiler de una película.
// Dependencias: React, react-bootstrap, react-router-dom
// Variables:
//    - imdbID: ID de IMDb de la película.
// Resultado: Renderiza el tráiler de la película y la información de la misma.
// ==============================================================================================
// Ejemplo de uso: <MovieTrailer />
// ==============================================================================================
import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Card } from 'react-bootstrap';
import { ShoppingCartContext } from '../context/ShoppingCartProvider';
import ActionButtons from './ActionButtons';
import useMovieData from '../hooks/useMovieData';

function MovieTrailer() {
  const { imdbID } = useParams();
  const { trailerUrl, movie } = useMovieData(imdbID);
  const { rentedMovies, boughtMovies, rentMovie, buyMovie } = useContext(ShoppingCartContext);

  const isRented = rentedMovies.some(m => m.imdbID === imdbID);
  const isBought = boughtMovies.some(m => m.imdbID === imdbID);

  return (
    <Container>
      <h2>Tráiler de la Película</h2>
      {trailerUrl ? (
        <iframe
          width="560"
          height="315"
          src={trailerUrl}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      ) : (
        <p>Cargando tráiler...</p>
      )}
      {movie && (
        <Card>
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
            <ActionButtons 
              movie={movie} 
              onRent={rentMovie} 
              onBuy={buyMovie} 
              isRented={isRented} 
              isBought={isBought} 
            />
          </Card.Body>
        </Card>
      )}
    </Container>
  );
}

export default MovieTrailer;