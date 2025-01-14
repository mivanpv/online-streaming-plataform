// Descripcion: Componente que renderiza la página de detalle de una película.
// Dependencias: React, react-bootstrap, react-router-dom, context/ShoppingCartProvider, services/movieService, components/ActionButtons
// Variables: 
//    - imdbID: ID de la película a mostrar.
// Resultado: Renderiza la información detallada de una película, incluyendo su título, año, género, director, actores, sinopsis y botones de alquilar y comprar.
// ==============================================================================================
// Ejemplo de uso: <MovieDetail />
// ==============================================================================================

// Hooks utilizados: useEffect, useState, useContext, 
// useParams: hook de React Router que permite acceder a los parámetros de la URL.

import React, { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { Card, Container, Row, Col } from 'react-bootstrap';
import { ShoppingCartContext } from '../context/ShoppingCartProvider';
import ActionButtons from './ActionButtons';
import { fetchMovieDetails } from '../services/movieService';

function MovieDetail() {
  const { imdbID } = useParams();
  const [movie, setMovie] = useState(null);
  const { rentedMovies, boughtMovies, rentMovie, buyMovie } = useContext(ShoppingCartContext);

  useEffect(() => {
    const getMovieDetails = async () => {
      const data = await fetchMovieDetails(imdbID);
      setMovie(data);
    };

    getMovieDetails();
  }, [imdbID]);

  const isRented = rentedMovies.some(m => m.imdbID === imdbID);
  const isBought = boughtMovies.some(m => m.imdbID === imdbID);

  return (
    <Container>
      {movie ? (
        <Card>
          <Row noGutters>
            <Col md={4}>
              <Card.Img 
                variant="top" 
                src={movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placeholder.com/150'} 
                style={{ width: '100%', height: 'auto' }}
              />
            </Col>
            <Col md={8}>
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
            </Col>
          </Row>
        </Card>
      ) : (
        <p>Cargando...</p>
      )}
    </Container>
  );
}

export default MovieDetail;