import React, { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Card } from 'react-bootstrap';
import { ShoppingCartContext } from '../context/ShoppingCartProvider';
import ActionButtons from './ActionButtons';

function MovieTrailer() {
  const { imdbID } = useParams();
  const [trailerUrl, setTrailerUrl] = useState('');
  const [movie, setMovie] = useState(null);
  const { rentedMovies, boughtMovies, rentMovie, buyMovie } = useContext(ShoppingCartContext);

  useEffect(() => {
    const fetchTrailer = async () => {
      const apiKey = process.env.REACT_APP_YOUTUBE_API_KEY; // Reemplaza con tu clave API de YouTube
      const response = await fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&q=${imdbID}+trailer&type=video&key=${apiKey}`);
      const data = await response.json();
      if (data.items && data.items.length > 0) {
        setTrailerUrl(`https://www.youtube.com/embed/${data.items[0].id.videoId}`);
      }
    };

    const fetchMovie = async () => {
      const apiKey = process.env.REACT_APP_OMDB_API_KEY; // Reemplaza con tu clave API de OMDb
      const response = await fetch(`https://www.omdbapi.com/?i=${imdbID}&apikey=${apiKey}`);
      const data = await response.json();
      setMovie(data);
    };

    fetchTrailer();
    fetchMovie();
  }, [imdbID]);

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