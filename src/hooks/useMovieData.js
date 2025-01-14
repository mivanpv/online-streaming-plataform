// Hock useMovieData que encapsula la lógica de obtención del tráiler y los detalles de la película. 
// Este hook recibe el ID de IMDb de la película como argumento y devuelve el tráiler y los detalles de la película 
// una vez que se han obtenido.

import { useState, useEffect } from 'react';
import { fetchMovieTrailer, fetchMovieDetails } from '../services/movieService';

const useMovieData = (imdbID) => {
  const [trailerUrl, setTrailerUrl] = useState('');
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const getMovieData = async () => {
      const trailer = await fetchMovieTrailer(imdbID);
      setTrailerUrl(trailer);

      const movieDetails = await fetchMovieDetails(imdbID);
      setMovie(movieDetails);
    };

    getMovieData();
  }, [imdbID]);

  return { trailerUrl, movie };
};

export default useMovieData;