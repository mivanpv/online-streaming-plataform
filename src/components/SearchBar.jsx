// Descripción: Este componente se encarga de mostrar un formulario de búsqueda de películas y de mostrar los resultados de la búsqueda.
// Dependencias: React, react-bootstrap
// Variables:
//    - search: string que almacena el valor del campo de búsqueda.
//    - results: array que almacena los resultados de la búsqueda.
// Resultado: Renderiza un formulario de búsqueda de películas y muestra los resultados de la búsqueda en tarjetas.
// ==============================================================================================
// Ejemplo de uso: <SearchBar />
// ==============================================================================================

// Hooks utilizados: useState, useContext

import React, { useState, useContext } from 'react';
import { Form, FormControl, Button, Row, Col } from 'react-bootstrap';
import { FaSearch } from 'react-icons/fa';
import MovieCard from './MovieCard';
import { ShoppingCartContext } from '../context/ShoppingCartProvider';
import { searchMoviesByTitle } from '../services/movieService';

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
    return regex.test(input) && input.length <= 50;
  };

  const handleSearch = async () => {
    if (!validateInput(search)) {
      alert('Entrada inválida. Por favor, ingrese solo letras, números y espacios.');
      return;
    }

    const movies = await searchMoviesByTitle(search);
    setResults(movies);
  };

  return (
    <div>
      <h2>Busqueda de pelicula</h2>
      <Form className="d-flex align-items-center mb-3" onSubmit={(e) => { e.preventDefault(); handleSearch(); }}>
        <FormControl
          type="search"
          placeholder="Buscar"
          className="mr-2"
          aria-label="Search"
          value={search}
          onChange={textchange}
        />
        <Button variant="outline-success" onClick={handleSearch}>
          <FaSearch />
        </Button>
      </Form>
      <Row>
        {results.length > 0 ? (
          results.map((movie) => (
            <Col key={movie.imdbID} md={3}>
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