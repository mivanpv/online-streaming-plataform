import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function MovieTrailer() {
  const { imdbID } = useParams();
  const [trailerUrl, setTrailerUrl] = useState('');

  useEffect(() => {
    const fetchTrailer = async () => {
      const apiKey = 'AIzaSyCpv-NNQ7TnbCP6HPqRjrB04MultQLo7fo'; // Reemplaza con tu clave API de YouTube
      const response = await fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&q=${imdbID}+trailer&type=video&key=${apiKey}`);
      const data = await response.json();
      if (data.items && data.items.length > 0) {
        setTrailerUrl(`https://www.youtube.com/embed/${data.items[0].id.videoId}`);
      }
    };

    fetchTrailer();
  }, [imdbID]);

  return (
    <div>
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
    </div>
  );
}

export default MovieTrailer;