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