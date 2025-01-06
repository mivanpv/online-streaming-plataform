import React, { useState, useContext } from 'react';
import { Form, FormControl, Button, Row, Col } from 'react-bootstrap';
import { FaSearch } from 'react-icons/fa';
import MovieCard from './MovieCard';
import { ShoppingCartContext } from '../context/ShoppingCartProvider';

function SearchBar() {
  const [search, setSearch] = useState('');
  const [results, setResults] = useState([]);
  const { rentedMovies, boughtMovies, rentMovie, buyMovie } = useContext(ShoppingCartContext);

  const textchange = (e) => {
    setSearch(e.target.value);
  };

  const validateInput = (input) => {
    // Validar que la entrada no esté vacía y no contenga caracteres especiales peligrosos
    const regex = /^[a-zA-Z0-9\sñÑáéíóúÁÉÍÓÚ]+$/;
    return regex.test(input);
  };

  const searchMovies = async () => {

    if (!validateInput(search)) {
      alert('Entrada inválida. Por favor, ingrese solo letras y números.');
      return;
    }

    const omdbApiKey = process.env.REACT_APP_OMDB_API_KEY; // Reemplaza con tu clave API de OMDb
    const response = await fetch(`https://www.omdbapi.com/?s=${search}&apikey=${omdbApiKey}`);
    const data = await response.json();
    setResults(data.Search || []);
  };

  return (
    <div>
      <h2>Busqueda de pelicula</h2>
      <Form className="d-flex align-items-center mb-3" onSubmit={(e) => { e.preventDefault(); searchMovies(); }}>
        <FormControl
          type="search"
          placeholder="Buscar"
          className="mr-2"
          aria-label="Search"
          value={search}
          onChange={textchange}
        />
        <Button variant="outline-success" onClick={searchMovies}>
          <FaSearch />
        </Button>
      </Form>
      <Row>
        {results.length > 0 ? (
          results.map((movie) => (
            <Col key={movie.imdbID} md={4}>
              <MovieCard 
                movie={movie} 
                onRent={rentMovie} 
                onBuy={buyMovie} 
                rentedMovies={rentedMovies} 
                boughtMovies={boughtMovies} 
              />
            </Col>
          ))
        ) : (
          <p>No se encontraron resultados</p>
        )}
      </Row>
    </div>
  );
}

export default SearchBar;